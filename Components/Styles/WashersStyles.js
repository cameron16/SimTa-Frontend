import React from 'react'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({

/* Washers Frame */
main_screen:{
	position: 'relative',
	width: 375,
	height: 667,

	backgroundColor: '#F2F2F2',
},


/* Rectangle */
rectangle_header: {
	position: 'absolute',
	width: 375,
	height: 70,
	left: 0,
	top: -4,

	backgroundColor: '#2D9CDB',
},

/* Line 2.1 */
menu_line1: {
	position: 'absolute',
	width: 36.01,
	height: 0,
	left: 6,
	top: 14.25,

	borderWidth: 2,
	borderColor: '#F2F2F2',
},

/* Line 2.3 */
menu_line2: {
	position: 'absolute',
	width: 36.01,
	height: 0,
	left: 6,
	top: 26,

	borderWidth: 2,
	borderColor: '#F2F2F2',
},

/* Line 2.2 */
menu_line3: {
	position: 'absolute',
	width: 36.01,
	height: 0,
	left: 6,
	top: 38,

	borderWidth: 2,
	borderColor: '#F2F2F2',
},


Washers_text:{

	position: 'absolute',
	width: 109,
	height: 44,
	left: 133,
	top: 8,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#F2F2F2',
},

Roosevelt_Island_text:{

	position: 'absolute',
	width: 148,
	height: 25,
	left: 118,
	top: 30,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 35,
	fontSize: 18,
	textAlign: 'center',

	color: '#F2F2F2',
},


/* Line 3 */
washer1_line: {
	position: 'absolute',
	width: 375,
	height: 0,
	left: 0,
	top: 158,

	borderWidth: 1,
	borderColor: '#828282',
},

/* Rectangle 2 */
washer1_png: {
	position: 'absolute',
	width: 42,
	height: 50,
	left: 21,
	top: 100,
},

/* 1: Available */
washer1_text1: {
	position: 'absolute',
	width: 208,
	height: 45,
	left: 82,
	top: 104,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#000000',
},

washer1_text2: {
	position: 'absolute',
	width: 208,
	height: 45,
	left: 110,
	top: 104,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#27AE60',
},

/* Line 3.1 */
washer2_line: {
	position: 'absolute',
	width: 375,
	height: 0,
	left: -2,
	top: 248,

	borderWidth: 1,
	borderColor: '#828282',
},

/* Rectangle 2.1 */
washer2_png: {
	position: 'absolute',
	width: 42,
	height: 50,
	left: 19,
	top: 190,
},

/* 2: In Cycle - 13 min */
washer2_text1: {
	position: 'absolute',
	width: 235,
	height: 45,
	left: 80,
	top: 194,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#000000',
},

washer2_text2: {
	position: 'absolute',
	width: 235,
	height: 45,
	left: 110,
	top: 194,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#EB5757',
},

/* Line 3.2 */
washer3_line: {
	position: 'absolute',
	width: 375,
	height: 0,
	left: -2,
	top: 336,

	borderWidth: 1,
	borderColor: '#828282',
},

/* Rectangle 2.2 */
washer3_png: {
	position: 'absolute',
	width: 42,
	height: 50,
	left: 19,
	top: 278,
},

/* 3: In Cycle - 14 min */
washer3_text1: {
	position: 'absolute',
	width: 235,
	height: 45,
	left: 80,
	top: 282,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#000000',
},

washer3_text2: {
	position: 'absolute',
	width: 235,
	height: 45,
	left: 110,
	top: 282,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#EB5757',
},

/* Line 3.3 */
washer4_line: {
	position: 'absolute',
	width: 375,
	height: 0,
	left: -2,
	top: 414,

	borderWidth: 1,
	borderColor: '#828282',
},

/* Rectangle 2.3 */
washer4_png: {
	position: 'absolute',
	width: 42,
	height: 50,
	left: 19,
	top: 356,
},

/* 4: Idle for 22 min */
washer4_text1: {
	position: 'absolute',
	width: 235,
	height: 45,
	left: 80,
	top: 360,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#000000',
},

washer4_text2: {
	position: 'absolute',
	width: 235,
	height: 45,
	left: 110,
	top: 360,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#F2994A',
},

load_rectangle:{

	position: 'absolute',
	width: 88,
	height: 40,
	left: 256,
	top: 105,

	backgroundColor: '#F2F2F2',
	borderWidth: 2,
	borderColor: '#2D9CDB',
	//box-sizing: border-box,
	borderRadius: 10,
},


load_text:{

	position: 'absolute',
	width: 49,
	height: 33,
	left: 280,
	top: 104,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'normal',
	lineHeight: 40,
	fontSize: 24,

	color: '#828282',
},

})