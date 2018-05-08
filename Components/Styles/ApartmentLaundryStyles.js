
import React from 'react';

import { StyleSheet } from 'react-native'

export default StyleSheet.create({

main_screen:{

	position: 'relative',
	width: 375,
	height: 667,
	backgroundColor: '#F2F2F2',
},

rectangle_header:{

	position: 'absolute',
	width: 375,
	height: 70,
	left: 0,
	top: -65+ -4,

	backgroundColor: '#2D9CDB',
//box-shadow: 0 4 4 rgba(0, 0, 0, 0.25),
},

Apartment_Laundry_Room_text:{

	position: 'absolute',
	width: 313,
	height: 33,
	left: 31,
	top: -65+ 17,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 40,
	fontSize: 24,
	textAlign: 'center',

	color: '#F2F2F2',
},

QR_code_rectangle:{

	position: 'absolute',
	width: 241,
	height: 86,
	left: 65,
	top: -65+ 334,

	backgroundColor: '#2D9CDB',
	borderRadius: 5,

	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'row'
},

apartment_code_rectangle:{

	position: 'absolute',
	width: 241,
	height: 80,
	left: 65,
	top: -65+ 156,

	backgroundColor: '#2D9CDB',
	borderRadius: 5,

	flex: 1, 
	justifyContent: 'center',
	alignItems: 'center'
	
},

done_rectangle:{

	position: 'absolute',
	width: 169,
	height: 53,
	left: 93,
	top: -65+ 527,

	backgroundColor: '#2D9CDB',
	borderRadius: 10,
},

apartment_code_text:{

	// position: 'absolute',
	// width: 202,
	// height: 25,
	// left: 75,
	// top: -65+ 188,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 18,
	textAlign: 'center',

	color: '#F2F2F2', //'#E0E0E0',
},


OR_text:{

	position: 'absolute',
	width: 55,
	height: 33,
	left: 150,
	top: -65+ 268,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 24,
	textAlign: 'center',

	color: '#828282',
},


Scan_QR_Code_text:{

	// position: 'absolute',
	// width: 123,
	// height: 25,
	// left: 126,
	// top: -65+ 368,
	left: 5,
	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 18,
	textAlign: 'center',

	color: '#F2F2F2',
},

corner_box_img:{
	// position: 'absolute',
	width: 22,
	height: 22,
	// left: 93,
	// top: -65+ 366,
	left: -5
},

done_text:{

	position: 'absolute',
	width: 47,
	height: 25,
	left: 152,
	top: -65+ 543,

	fontFamily: 'Cochin',
	fontStyle: 'normal',
	fontWeight: 'bold',
	lineHeight: 0,
	fontSize: 18,
	textAlign: 'center',

	color: '#F2F2F2',
},

})