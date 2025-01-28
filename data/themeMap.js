const CUSTOM_MAP_STYLE = [
	{
		elementType: 'geometry',
		stylers: [{ color: '#f5f5f5' }],
	},
	{
		elementType: 'labels.icon',
		stylers: [{ visibility: 'off' }],
	},
	{
		elementType: 'labels.text.fill',
		stylers: [{ color: '#616161' }],
	},
	{
		elementType: 'labels.text.stroke',
		stylers: [{ color: '#f5f5f5' }],
	},
	{
		featureType: 'road',
		elementType: 'geometry',
		stylers: [{ color: '#ffffff' }],
	},
	{
		featureType: 'road',
		elementType: 'labels.icon',
		stylers: [{ visibility: 'off' }],
	},
	{
		featureType: 'road.arterial',
		elementType: 'geometry',
		stylers: [{ color: '#ffe7a6' }],
	},
	{
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [{ color: '#ffc107' }],
	},
	{
		featureType: 'road.local',
		elementType: 'geometry',
		stylers: [{ color: '#e0e0e0' }],
	},
	{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [{ color: '#c9e4f7' }],
	},
	{
		featureType: 'water',
		elementType: 'labels.text.fill',
		stylers: [{ color: '#92998d' }],
	},
];

export default CUSTOM_MAP_STYLE