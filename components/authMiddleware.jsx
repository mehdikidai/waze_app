import { router, useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';


const checkAuth = () => {
  return false; 
};

function AuthMiddleware({ children }) {
  const navigation = useNavigation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = checkAuth(); 
      setIsAuthenticated(authStatus); 

      if (!authStatus) {
        router.push('login') 
      }
    };
    verifyAuth();
	return () => setIsAuthenticated(false)
  }, [navigation]);

  
  return isAuthenticated ? children : null;
}

export default AuthMiddleware;