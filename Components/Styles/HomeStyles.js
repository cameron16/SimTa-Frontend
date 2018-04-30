
import React from 'react';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({

main_screen:{

	position: 'relative',
	width: 375,
	height: 667,
	backgroundColor: '#F2F2F2',
	flex: 1
},

logo:{
	position: 'absolute',
	width: 200,
	height: 236.9,
	left: 87,
	top: 113,

},

header_rectangle:{
	position: 'absolute',
	width: 375,
	height: 70,
	left: 0,
	top: -4,

	backgroundColor: '#2D9CDB',

},

header_text:{

	position: 'absolute',
	width: 227,
	height: 33,
	left: 74,
	top: 17,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#F2F2F2',
},



email_line:{

	position: 'absolute',
	width: 265.02,
	height: 0,
	left: 55.99,
	top: 405.48,

	borderWidth: 2,
	borderColor: '#2D9CDB',

},

password_line:{

	position: 'absolute',
	width: 265.02,
	height: 0,
	left: 55.99,
	top: 448.48,

	borderColor: '#2D9CDB' ,
	borderWidth: 2,

},


email_text:{

	position: 'absolute',
	width: 180,
	height: 25,
	left: 97,
	top: 381,//380,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 18,
	textAlign: 'center',

	color: '#2D9CDB', //'#F2F2F2',
	borderWidth: 0,
	borderStyle: 'solid',
	borderColor: '#000000',


},

password_text:{
	position: 'absolute',
	width: 87,
	height: 25,
	left: 144,
	top: 420,//415,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 30,
	fontSize: 18,
	textAlign: 'center',

	color: '#2D9CDB',//'#F2F2F2',
	borderColor:'#000000',
	borderWidth: 0,
	borderStyle:'solid',




},


envelope_icon:{

	position: 'absolute',
	width: 40,
	height: 30,
	left: 56,
	top: 377,

},


envelope_body:{

	position: 'absolute',
	width: 25,
	height: 18,
	left: 52,
	top: 383,

	backgroundColor: '#F2F2F2',
	borderWidth: 1,
	borderColor: '#000000',
	borderRadius: 2,

},

envelope_bottom_triangle:{
	position: 'absolute',
	width: 30,
	height: 15,
	left: 50,
	top: 389,

	backgroundColor: '#F2F2F2',
	borderWidth: 1,
	borderColor: '#000000',
	borderRadius: 1,

},

envelope_top_triangle:{
	position: 'absolute',
	width: 30,
	height: 13,
	left: 50,
	top: 393,

	backgroundColor: '#F2F2F2',
	borderWidth: 1,
	borderColor: '#000000',
	borderRadius: 1,
	transform: [
      { skewX: '-180deg' },

    ],
},

lock_top:{

	position: 'absolute',
	width: 13,
	height: 13,
	left: 57,
	top: 422,

	backgroundColor: '#F2F2F2',
	borderWidth: 1,
	borderColor:'#000000',
	borderRadius: 7,

},


lock_body:{

	position: 'absolute',
	width: 15,
	height: 14,
	left: 56,
	top: 428,

	backgroundColor: '#F2F2F2',
	borderWidth: 1,
	borderColor: '#000000',
	borderRadius: 1,

},

lock_icon:{
	position: 'absolute',
	width: 30,
	height: 25,
	left: 52,
	top: 425,
},



login_box:{

	position: 'absolute',
	width: 211,
	height: 37,
	left: 82,
	top: 475,

	backgroundColor: '#2D9CDB',
	borderRadius: 10,

},


login_text:{

	// position: 'absolute',
	// // width: 121,
	// // height: 25,//12,
	// left: 0,
	// top: 0,//487,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 30,
	fontSize: 20,
	textAlign: 'center',

	color: '#F2F2F2',

},

login_button:{

	position: 'absolute',
	// width: 211,
	// height: 37,
	left: 82,
	top: 550,
	color: '#F2F2F2'

	// backgroundColor: '#2D9CDB',
	// borderRadius: 10,

},




new_text:{

	position: 'absolute',
	width: 53,
	height: 18,
	left: 133,
	top: 523,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 15,
	textAlign: 'center',

	color: '#4F4F4F', 

},


sign_up_text:{

	position: 'absolute',
	width: 53,
	height: 18,
	left: 181,
	top: 523,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 15,
	textAlign: 'center',

	color: '#4F4F4F',

},

new_sign_up_text:{


	position: 'absolute',
	width: 263,
	height: 18,
	left: 54,
	top: 522,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 14,
	textAlign: 'center',

	color: '#000000',
},


signup_line: {

	position: 'absolute',
	width: 49.01,
	height: 0,
	left: 182,
	top: 541.74,

	borderWidth: 1,
	borderColor:'#4F4F4F',

},


})