import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




import styles from "../Styles/LaundryStyles";

export class LaundryScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {}; 
  	}

	render() {
	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
		    	
		    	
		    	<Text style = {styles.subheader_text}>Where are you doing laundry?</Text>

		    	<View style = {styles.Home_rectangle} />
		    	<Text style = {styles.Home_text}>HOME</Text>

		    	<View style = {styles.Apartment_rectangle} />
		    	<Text style = {styles.Apartment_text}>APARTMENT</Text>

		    	<View style = {styles.Laundromat_rectangle} />
		    	<Text style = {styles.Laundromat_text}>LAUNDROMAT</Text>
		    	
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}

//<View style = {styles.rectangle_header} />
//<Text style = {styles.Laundry_text}>Laundry</Text>