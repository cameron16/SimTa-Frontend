import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




import styles from "../Styles/ApartmentLaundryStyles";

export class ApartmentLaundryScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {}; 
  	}

	render() {
	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
		    	
		    	
		    	<View style = {styles.QR_code_rectangle} />
		    	<Text style = {styles.Scan_QR_Code_text}> Scan QR Code</Text>
		    	<Image source ={require('../../Pictures/square_corners.png')} style = {styles.corner_box_img} />
		    	
		    	<Text style = {styles.OR_text}>OR</Text>

		    	<View style = {styles.apartment_code_rectangle} />
		    	<Text style = {styles.apartment_code_text}>Enter Apartment Code</Text>
		    	

		    	<View style = {styles.done_rectangle} />
		    	<Text style = {styles.done_text}>Done</Text>
		    	
		    	
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}
				/*<TouchableOpacity style = {styles.login_box} onPress={() => {Alert.alert('Login');}}><Text style = {styles.login_text}>Login</Text></TouchableOpacity>	
		    	 <Text style = {styles.new_text}>New?</Text>

		    	 <TouchableOpacity onPress={() => {Alert.alert('Sign up!');}}><Text style = {styles.sign_up_text}>Sign up</Text></TouchableOpacity>	
		    	 <View style = {styles.signup_line} />*/