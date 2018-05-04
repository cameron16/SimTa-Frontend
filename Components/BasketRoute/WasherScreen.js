import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




import styles from "../Styles/WashersStyles";

export class WasherScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {

	    	washer_loaded: false,

	    }; 
  	}

	render() {

		const loaded_button = this.state.washer_loaded ? <TouchableOpacity activeOpacity = {1} style = {styles.loaded_rectangle}><Text style = {styles.loaded_text}>loaded</Text></TouchableOpacity>	
  : <View></View>

	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
		    	
		    	<Text style = {styles.Roosevelt_Island_text}>Roosevelt Island</Text>
		    	
		    	<View style = {styles.washer1_line} />
		    	<Text style = {styles.washer1_text1}>1: </Text>
		    	<Text style = {styles.washer1_text2}>Available </Text>
		    	<MaterialIcons name="local-laundry-service" size={50} color="#27AE60" style={styles.washer1_png}/>
		    	
		    	<View style = {styles.washer2_line} />
		    	<Text style = {styles.washer2_text1}>2: </Text>
		    	<Text style = {styles.washer2_text2}>In Cycle - 13 min</Text>
		    	<MaterialIcons name="local-laundry-service" size={50} color="#EB5757" style={styles.washer2_png}/>

		    	<View style = {styles.washer3_line} />
		    	<Text style = {styles.washer3_text1}>3: </Text>
		    	<Text style = {styles.washer3_text2}>In Cycle - 14 min</Text>
		    	<MaterialIcons name="local-laundry-service" size={50} color="#EB5757" style={styles.washer3_png}/>

		    	<View style = {styles.washer4_line} />
		    	<Text style = {styles.washer4_text1}>4: </Text>
		    	<Text style = {styles.washer4_text2}>Idle for 22 min</Text>
		    	<MaterialIcons name="local-laundry-service" size={50} color="#F2994A" style={styles.washer4_png}/>

		    	<TouchableOpacity style = {styles.load_rectangle} onPress ={() => this.setState({washer_loaded:true}) }><Text style = {styles.load_text}>load</Text></TouchableOpacity>	
		    	{loaded_button}
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}

// <View style = {styles.load_rectangle} />
// 		    	<Text style = {styles.load_text}>load</Text>
		    	

				/*<TouchableOpacity style = {styles.login_box} onPress={() => {Alert.alert('Login');}}><Text style = {styles.login_text}>Login</Text></TouchableOpacity>	
		    	 <Text style = {styles.new_text}>New?</Text>

		    	 <TouchableOpacity onPress={() => {Alert.alert('Sign up!');}}><Text style = {styles.sign_up_text}>Sign up</Text></TouchableOpacity>	
		    	 <View style = {styles.signup_line} />*/