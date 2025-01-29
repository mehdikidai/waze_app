import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

const Btn = ({ 
  text = 'test', 
  background = '#e54b4b', 
  textColor = Colors.text, 
  ...props 
}) => {
  return (
    <TouchableOpacity {...props}>
      <View style={[styles.btn, { backgroundColor: background }]}>
        <Text style={[styles.textBtn, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '500',
  },
});