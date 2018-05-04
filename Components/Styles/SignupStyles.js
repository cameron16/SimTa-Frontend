import React from 'react';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({

	main_screen:{
	    position: 'relative',
		width: 375,
		height: 667,

		backgroundColor: '#FFFFFF',

  	},

  /*Rectangles*/
	rectangle_header: {

	    width: 375,
		height: 70,
		left: 0,
		top: -63+-4,

		backgroundColor: '#2D9CDB',


  	},


  	create_account_text:{

		position: 'absolute',
		width: 227,
		height: 43,
		left: 74,
		top: -63+17,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 55,
		fontSize: 24,
		textAlign: 'center',

		color: '#F2F2F2',
	},

  
  	name_line:{
  		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: -63+207.48,

		borderWidth: 2,
		borderColor: '#27AE60',
  	},
  	email_line:{
  		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: -63+252.48,

		borderWidth: 2,
		borderColor: '#27AE60',
  	},


  	password_line:{

		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: -63+304.48,

		borderWidth: 2,
		borderColor: '#27AE60',
  	},
  	
  	
  	confirm_password_line:{

		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: -63+351.48,

		borderWidth: 2,
		borderColor: '#27AE60',

  	},

  	person_body:{
  		position: 'absolute',
		width: 30,
		height: 50,
		left: 52.54,
		top: -63+176,
  	},


  	envelope_body:{

		position: 'absolute',
		width: 30,
		height: 25,
		left: 57,
		top: -63+226,

  	},

  	lock_pass:{
  		position: 'absolute',
		width: 30,
		height: 30,
		left: 53,
		top: -63+281,
  	},

  	lock_confirm_pass:{
  		position: 'absolute',
		width: 30,
		height: 30,
		left: 53,
		top: -63+328,
  	},
  	name_text:{

		position: 'absolute',
		width: 52,
		height: 25,
		left: 161,
		top: -63+181,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 18,
		textAlign: 'center',

		color: '#F2F2F2',
		borderWidth: 0,
		borderColor: '#000000',

	},

  	email_text:{

		position: 'absolute',
		width: 180,
		height: 25,
		left: 97,
		top: -63+227,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 18,
		textAlign: 'center',

		color: '#F2F2F2',
		borderWidth: 0,
		borderColor: '#000000',

  	},
  	

	password_text:{

		position: 'absolute',
		width: 87,
		height: 25,
		left: 144,
		top: -63+271,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 18,
		textAlign: 'center',

		color: '#F2F2F2',
		borderWidth: 0,
		borderColor: '#000000',
	},

	confirm_password_text:{

		position: 'absolute',
		width: 162,
		height: 25,
		left: 106,
		top: -63+318,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 18,
		textAlign: 'center',

		color: '#F2F2F2',
		borderWidth: 0,
		borderColor: '#000000',
	},



  	search_laundromat_text:{
  // 		position: 'absolute',
		// width: 115,
		// height: 25,
		// left: 48,
		// top: -63+435,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 16,
		textAlign: 'center',

		color: '#F2F2F2',
  	},

  	search_laundromat_rectangle:{
		position: 'absolute',
		width: 139,
		height: 45,
		left: 37,
		top: -63+426,

		backgroundColor: '#27AE60',
		borderRadius: 10,


  	},
  	
  	add_your_apartment_text:{

  // 		position: 'absolute',
		// width: 115,
		// height: 25,
		// left: 210,
		// top: -63+435,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 16,
		textAlign: 'center',

		color: '#F2F2F2',

  	},

  	add_apartment_rectangle:{
  		position: 'absolute',
		width: 139,
		height: 45,
		left: 199,
		top: -63+426,

		backgroundColor: '#27AE60',
		borderRadius: 10,
  	},


  	login_text:{

  		position: 'absolute',
		width: 50,
		height: 14,
		left: 6,
		top: -63+29,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 14,
		textAlign: 'center',

		color: '#000000',

  	},



})