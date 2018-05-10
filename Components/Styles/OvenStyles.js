import React from 'react'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
/* Oven */
main_screen:{
	position: 'relative',
	width: 375,
	height: 667,

	backgroundColor: '#FFFFFF',
},

/* rectangle_header */
rectangle_header:{
	position: 'absolute',
	width: 375,
	height: 70,
	left: 0,
	top: -63 + -4,

	backgroundColor: '#EB5757',
	//box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),
},

/* Your Oven 

position: 'absolute',
width: 189,
height: 50,
left: 93,
top: -63 + 8,

fontFamily: 'Cochin',
fontStyle: 'normal',
fontWeight: 'bold',
lineHeight: 40,
fontSize: 36,
textAlign: 'center',

color: '#F2F2F2',
*/

/* Rectangle_status */
Rectangle_status:{
	position: 'absolute',
	width: 320,
	height: 224,
	left: 27,
	top: -63 +108,

	backgroundColor: '#F2F2F2',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,
},

/* Union_status

position: 'absolute',
width: 320,
height: 43,
left: 27.04,
top: -63 +106.5,

backgroundColor: '#EB5757', */


/* Rectangle_2_status */
Rectangle_2_status:{
	position: 'absolute',
	width: 320,
	height: 43,
	left: 27.04,
	top: -63 +106.5,

	backgroundColor: '#EB5757',
	borderRadius: 19,
},

/* Rectangle_3_status */
Rectangle_3_status:{
	position: 'absolute',
	width: 320,
	height: 21,
	left: 27.04,
	top: -63 +128.5,

	backgroundColor: '#EB5757',
},

/* Rectangle_past_recipes */
Rectangle_past_recipes:{
	position: 'absolute',
	width: 320,
	height: 224,
	left: 27,
	top: -63 +363.5,

	backgroundColor: '#F2F2F2',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,
},

/* Union_recipes 

position: 'absolute',
width: 320,
height: 43,
left: 27.04,
top: -63 +362,

backgroundColor: '#EB5757', */


/* Rectangle_2_past_recipes */
Rectangle_2_past_recipes:{
	position: 'absolute',
	width: 320,
	height: 43,
	left: 27.04,
	top: -63 +362,

	backgroundColor: '#EB5757',
	borderRadius: 19,
},

/* Rectangle_3_past_recipes */
Rectangle_3_past_recipes:{
	position: 'absolute',
	width: 320,
	height: 21,
	left: 27.04,
	top: -63 +384,

	backgroundColor: '#EB5757',
},

/* Past Cooking Details_text */
Past_cooking_details_text:{
	position: 'absolute',
	width: 245,
	height: 33,
	left: 37,
	top: -63 +370,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* The last time you baked_text */
last_time_you_baked_text:{
	position: 'absolute',
	width: 295,
	height: 123,
	left: 36,
	top: -63 +412,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 18,

	color: '#000000',
},

/* Current Status_text */
Current_Status_text:{
	position: 'absolute',
	width: 220,
	height: 33,
	left: 34,
	top: -63 +113,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* Rectangle 2 

position: 'absolute',
width: 5,
height: 21,
left: 45,
top: -63 +171,

border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 1,


/* Rectangle 2.1 

position: 'absolute',
width: 5,
height: 15,
left: 45,
top: -63 +178,

backgroundColor: #333333,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 1,*/


/* Ellipse_thermometer */
Ellipse_thermometer:{
	position: 'absolute',
	width: 20,
	height: 20,
	left: 44,
	top: -63 +175,
},

/* 423 F_text */
Temp_F_text:{
	position: 'absolute',
	width: 61,
	height: 33,
	left: 65,
	top: -63 +165,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#000000',
},



/* stop_watch_loc */
stop_watch_loc:{
	position: 'absolute',
	width: 20,
	height: 22.87,
	left: 39,
	top: -63 +220,
},

/* 10 min_text */
time_min_text:{
	position: 'absolute',
	width: 81,
	height: 33,
	left: 65,
	top: -63 +210,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#000000',
},

past_temp_F_text:{
	position: 'absolute',
	width: 61,
	height: 33,
	left: 65,
	top: -63 +445,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#000000',
},
past_thermometer:{
	position: 'absolute',
	width: 20,
	height: 20,
	left: 44,
	top: -63 +455,
},

past_watch:{
	position: 'absolute',
	width: 20,
	height: 20,
	left: 39,
	top: -63 +495,
},
past_time_min_text:{
	position: 'absolute',
	width: 81,
	height: 33,
	left: 65,
	top: -63 +485,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#000000',
},
you_rated_text:{
	position: 'absolute',
	width: 295,
	height: 123,
	left: 36,
	top: -63 +520,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 18,

	color: '#000000',
},


})