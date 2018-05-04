import React from 'react'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({

/* Laundry - home,apartment,laundormat */
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
	height: 112,
	left: 0,
	top: -4,

	backgroundColor: '#2D9CDB',
//box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),
},

/* Laundry_text */
Laundry_text:{
	position: 'absolute',
	width: 150,
	height: 50,
	left: 115,
	top: 17,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 32,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* Where are you doing your laundry? */
subheader_text:{
	position: 'absolute',
	width: 355,
	height: 25,
	left: 15,
	top: 97,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 22,
	textAlign: 'center',

	color: '#2D9CDB',
},

/* Rectangle 3_laundrymachine.1 

position: 'absolute',
width: 40,
height: 12.04,
left: 56,
top: 15,

backgroundColor: #56CCF2,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 2,*/


Rectangle_laundrymachine:{

	position: 'absolute',
	width: 42,
	height: 38.89,
	left: 55,
	top: 26.11,
},
/*
Ellipse_laundrymahcine

position: 'absolute',
width: 24,
height: 21.3,
left: 64,
top: 32.59,

backgroundColor: #56CCF2,
border: 1 solid #000000,
box-sizing: border-box,*/


/* Home_text */
Home_rectangle:{
	position: 'absolute',
	width: 320,
	height: 126,
	left: 28,
	top: 142,

	backgroundColor: '#2D9CDB',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,
},

/* Home_text */
Home_text:{
	position: 'absolute',
	width: 125,
	height: 50,
	left: 123,
	top: 185,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* Apartment_rectangle */
Apartment_rectangle:{
	position: 'absolute',
	width: 320,
	height: 126,
	left: 28,
	top: 297,

	backgroundColor: '#2D9CDB',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,
},

/* Apartment_text */
Apartment_text:{
	position: 'absolute',
	width: 238,
	height: 50,
	left: 70,
	top: 340,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* Laundromat_rectangle */
Laundromat_rectangle:{
	position: 'absolute',
	width: 320,
	height: 126,
	left: 28,
	top: 453,

	backgroundColor: '#2D9CDB',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,
},

/* Laundromat_text */
Laundromat_text:{
	position: 'absolute',
	width: 275,
	height: 50,
	left: 52,
	top: 496,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},

})