import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




import styles from "../Styles/SimTaHomeStyles";

export class SimTaHomeScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {}; 
  	}

	render() {
	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
		    	
		    	
		    	<View style = {styles.LAUNDRY_rectangle} />
		    	<Text style = {styles.LAUNDRY_text}>LAUNDRY</Text>
		    	<MaterialIcons name="local-laundry-service" size={50} color="#6FCF97" style={styles.Rectangle_laundry_body}/>

				<View style = {styles.OVEN_rectangle} />
		    	<Text style = {styles.OVEN_text}>OVEN</Text>
		    	<MaterialCommunityIcons name="stove" size={50} color="#6FCF97" style={styles.Rectangle_oven_body}/>


		    	<View style = {styles.FRIDGE_rectangle} />
		    	<Text style = {styles.FRIDGE_text}>FRIDGE</Text>
		    	<MaterialCommunityIcons name="fridge" size={50} color="#6FCF97" style={styles.Rectangle_fridge_body}/>

		    	<View style = {styles.DISHWASHER_rectangle} />
		    	<Text style = {styles.Dishwasher_text}>DISHWASHER</Text>
		    	<Image source ={require('../../Pictures/dishwasher_logo.png')} style = {styles.dishwasher_body} />
		    	

		    	
		    	
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}

//<View style = {styles.rectangle_header} />
//<Text style = {styles.Laundry_text}>Laundry</Text>