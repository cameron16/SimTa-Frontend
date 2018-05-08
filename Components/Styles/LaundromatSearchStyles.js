import React from 'react';

import { StyleSheet } from 'react-native'


const name_line_top = -63+162.48;
const name_text_top = -63+136;

export default StyleSheet.create({

	main_screen:{
		position: 'relative',
		width: 375,
		height: 667,
		backgroundColor: '#F2F2F2',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column'
	},


	name_text:{

		position: 'absolute',
		width: 312,//192,//52,
		height: 25,
		left: 31,//91,//161,
		top: name_text_top,

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 0,
		fontSize: 18,
		textAlign: 'center',

		color: '#000000',
		borderWidth: 0,
		borderColor: '#000000',

	},

	name_line:{
  		position: 'absolute',
		width: 295.02,
		height: 0,
		left: 40.99,
		top: name_line_top,

		borderWidth: 2,
		borderColor: '#2D9CDB',//'#27AE60',
  	},

  	login_box:{

		position: 'absolute',
		width: 211,
		height: 37,
		left: 82,
		top: 200,

		backgroundColor: '#2D9CDB', //'#27AE60',
		borderRadius: 10,
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',

		flexDirection: 'row',

	},


	login_text:{		

		fontFamily: 'Cochin',
		fontStyle: 'normal',
		fontWeight: 'bold',
		lineHeight: 30,
		fontSize: 20,
		textAlign: 'center',

		color: '#F2F2F2',

	},
	
})


