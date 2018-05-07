import React from 'react'

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
/* SimTa Smart Home */
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
	top: -63+-4,

	backgroundColor: '#27AE60',
	//box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),
},

/* Your Appliances_text */
your_appliances_text:{
	position: 'absolute',
	width: 194,
	height: 33,
	left: 90,
	top: -63+17,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* LAUNDR_rectangle */
LAUNDRY_rectangle:{
	position: 'absolute',
	width: 320,
	height: 110,
	left: 28,
	top: -63+99,

	backgroundColor: '#27AE60',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,


	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center',

	flexDirection: 'row',
},

/* Rectangle 3_laundrymachine.1 

position: 'absolute',
width: 40,
height: 13,
left: 49,
top: -63+133,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 2,*/


/* Rectangle_laundry_body */
Rectangle_laundry_body:{
	position: 'absolute',
	width: 42,
	height: 52,
	left: 48,
	top: -63+130,
},

Rectangle_laundry_body_2:{
	//position: 'absolute',
	// width: 42,
	// height: 52,
	// left: 15,
	// top: 30,
	left: -15,
},
/* Ellipse_laundrymahcine 

position: 'absolute',
width: 24,
height: 23,
left: 57,
top: -63+152,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,*/


/* LAUNDRY_text */
LAUNDRY_text:{
	position: 'absolute',
	width: 195,
	height: 50,
	left: 110,
	top: -63+137,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},


LAUNDRY_text_2:{
	// position: 'absolute',
	// // width: 195,
	// // height: 50,
	// // left: 110,
	// top: 35,
	// left: 60,
	//flex: 1.0,
	//left: 10, 
	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},



/* DISHWASHER_rectangle */
DISHWASHER_rectangle:{
	position: 'absolute',
	width: 320,
	height: 110,
	left: 28,
	top: -63+514,

	backgroundColor: '#27AE60',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,

	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center',

	flexDirection: 'row',
},

/* Dishwasher_text */
Dishwasher_text:{
	// position: 'absolute',
	// width: 247,
	// height: 50,
	// left: 89,
	// top: -63+548,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 32,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* OVEN_rectangle */
OVEN_rectangle:{
	position: 'absolute',
	width: 320,
	height: 110,
	left: 28,
	top: -63+239,

	backgroundColor: '#27AE60',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,

	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center',

	flexDirection: 'row',
},

/* Rectangle 4_oven

position: 'absolute',
width: 40,
height: 13,
left: 61,
top: -63+270,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 2, */


/* Rectangle_oven_body */
Rectangle_oven_body:{
	position: 'absolute',
	width: 59,
	height: 42,
	left: 40,
	top: 30,
	//top: -63+267,
},


/* Rectangle 3_oven 

position: 'absolute',
width: 40,
height: 22,
left: 61,
top: -63+292,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 2, */


/* OVEN_text */
OVEN_text:{
	// position: 'absolute',
	// width: 120,
	// height: 50,
	// left: 125,
	// top: -63+274,

	left: 7,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},

/* FRIDGE_rectangle */
FRIDGE_rectangle:{
	position: 'absolute',
	width: 320,
	height: 110,
	left: 28,
	top: -63+378,

	backgroundColor: '#27AE60',
	//box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25),
	borderRadius: 19,

	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center',

	flexDirection: 'row',
},

/* Rectangle_fridge_body */
Rectangle_fridge_body:{
	// position: 'absolute',
	// width: 41,
	// height: 54,
	// left: 50,
	// top: -63+404,
	left: -20,
},

/* Rectangle 3_fridge 

position: 'absolute',
width: 3,
height: 54,
left: 81,
top: -63+404,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,


/* Rectangle 4_fridge_handle2

position: 'absolute',
width: 4,
height: 7,
left: 76,
top: -63+427,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 2,


/* Rectangle 4_fridge_handle1

position: 'absolute',
width: 4,
height: 7,
left: 85,
top: -63+427,

backgroundColor: #6FCF97,
border: 1 solid #000000,
box-sizing: border-box,
borderRadius: 2,
*/

/* FRIDGE_text */
FRIDGE_text:{
	// position: 'absolute',
	// width: 150,
	// height: 50,
	// left: 120,
	// top: -63+412,

	left: -5, 
	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 36,
	textAlign: 'center',

	color: '#F2F2F2',
},




/* dishwasher_body */
dishwasher_body:{
	position: 'absolute',
	width: 43,
	height: 37,
	left: 47,
	top: -63+550,
},


dishwasher_body_box:{
	// position: 'absolute',
	// width: 60,
	// height: 60,
	// left:40,
	// top: -63+542,
	left: -15,
},



/* dishwasher_line_top 

position: 'absolute',
width: 48,
height: 0,
left: 52,
top: -63+559.06,

border: 2 solid '#27AE60',


/* dishwasher_line_bottom 

position: 'absolute',
width: 48,
height: 0,
left: 52,
top: -63+583.63,

border: 2 solid '#27AE60',


/* dishwasher_circle2 

position: 'absolute',
width: 4,
height: 4.03,
left: 85.16,
top: -63+550.46,

backgroundColor: '#27AE60',
border: 1 solid #000000,
box-sizing: border-box,


/* dishwasher_circle1

position: 'absolute',
width: 4,
height: 4.03,
left: 92.47,
top: -63+550.46,

backgroundColor: '#27AE60',
border: 1 solid #000000,
box-sizing: border-box,*/





// component :{

// position: 'absolute',
// width: 320,
// height: 110,
// left: 28,
// top: -63+99,

// },





// LAUNDR_rectangle :{

// position: 'absolute',
// left: 0, //0%;
// right: 0, //0%;
// top: 0, //0%;
// bottom: 0, //0%;

// backgroundColor: '#27AE60',
// // box-shadow: inset 0 4 4 rgba(0, 0, 0, 0.25);
// borderRadius: 19,

// },



// LAUNDRY_text :{

// position: 'absolute',
// left: 84.92, //26.56%,
// right: 260, //18.75%;
// top: 38,//34.55%;
// bottom: 88, //20%;

// fontFamily: 'Cochin',
// fontStyle: 'normal',
// fontWeight: 'bold',
// lineHeight: 40,
// fontSize: 36,
// textAlign: 'center',

// color: '#F2F2F2',

// },



});


// /* Rectangle 3_laundrymachine.1 */

// position: absolute;
// left: 6.56%;
// right: 80.94%;
// top: 30.91%;
// bottom: 57.27%;

// background: #6FCF97;
// border: 1 solid #000000;
// box-sizing: border-box;
// border-radius: 2;


// /* Rectangle_laundry_body */

// position: absolute;
// left: 6.25%;
// right: 80.62%;
// top: 41.82%;
// bottom: 20%;

// background: #6FCF97;
// border: 1 solid #000000;
// box-sizing: border-box;
// border-radius: 5;


//  Ellipse_laundrymahcine 

// position: absolute;
// left: 9.06%;
// right: 83.44%;
// top: 48.18%;
// bottom: 30.91%;

// background: #6FCF97;
// border: 1 solid #000000;
// box-sizing: border-box;


// /* LAUNDRY_text */

// position: absolute;
// left: 26.56%;
// right: 18.75%;
// top: 34.55%;
// bottom: 20%;

// font-family: Open Sans;
// font-style: normal;
// font-weight: bold;
// line-height: normal;
// font-size: 36;
// text-align: center;

// color: #F2F2F2;







