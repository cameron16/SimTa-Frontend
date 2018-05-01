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
		top: -4,

		backgroundColor: '#2D9CDB',


  	},


  	create_account_text:{

		position: 'absolute',
		width: 227,
		height: 43,
		left: 74,
		top: 17,

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
		top: 207.48,

		borderWidth: 2,
		borderColor: '#2D9CDB',
  	},
  	email_line:{
  		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: 252.48,

		borderWidth: 2,
		borderColor: '#2D9CDB',
  	},


  	password_line:{

		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: 304.48,

		borderWidth: 2,
		borderColor: '#2D9CDB',
  	},
  	
  	
  	confirm_password_line:{

		position: 'absolute',
		width: 265.02,
		height: 0,
		left: 55.99,
		top: 351.48,

		borderWidth: 2,
		borderColor: '#2D9CDB',

  	},

  	person_body:{
  		position: 'absolute',
		width: 30,
		height: 50,
		left: 52.54,
		top: 176,
  	},


  	envelope_body:{

		position: 'absolute',
		width: 30,
		height: 25,
		left: 57,
		top: 226,

  	},

  	lock_pass:{
  		position: 'absolute',
		width: 30,
		height: 30,
		left: 53,
		top: 281,
  	},

  	lock_confirm_pass:{
  		position: 'absolute',
		width: 30,
		height: 30,
		left: 53,
		top: 328,
  	},
  	name_text:{

		position: 'absolute',
		width: 52,
		height: 25,
		left: 161,
		top: 181,

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
		top: 227,

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
		top: 271,

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
		top: 318,

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
		// top: 435,

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
		top: 426,

		backgroundColor: '#2D9CDB',
		borderRadius: 10,


  	},
  	
  	add_your_apartment_text:{

  // 		position: 'absolute',
		// width: 115,
		// height: 25,
		// left: 210,
		// top: 435,

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
		top: 426,

		backgroundColor: '#2D9CDB',
		borderRadius: 10,
  	},


  	login_text:{

  		position: 'absolute',
		width: 50,
		height: 14,
		left: 6,
		top: 29,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 14,
		textAlign: 'center',

		color: '#000000',

  	},



})