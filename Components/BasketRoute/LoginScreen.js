import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';




import styles from "../Styles/LoginStyles";

export class LoginScreen extends React.Component {
	    //make the header go away
	    // static navigationOptions = {
     //    header: null
    	// }
	constructor(props) {
	    super(props);
	    this.state = { 
	    	email: "",
	    	password: ""

	   };
  	}
 
	render() {
		    const {navigate} = this.props.navigation;

	    return (
	    	<KeyboardAwareScrollView>
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
	    	
		    	<Image source ={require('../../Pictures/simta_logo.png')} style = {styles.logo} />
		    	<View style = {styles.email_line} />
		    	<Foundation name="mail" size={30} color="#000000" style={styles.envelope_icon}/>
		    	<TextInput
			        style={styles.email_text}
			        placeholder = "email"
			        onChangeText={(email) => this.setState({email})}
			        value={this.state.email}/>
		    	<View style = {styles.password_line} />
		    	<EvilIcons name="lock" size={30} color="#000000" style={styles.lock_icon}/>

		    	<TextInput
			        style={styles.password_text}
			        placeholder = "password"
			        onChangeText={(password) => this.setState({password})}
			        value={this.state.password}/>
		    	
		    	 <TouchableOpacity style = {styles.login_box} onPress ={() => navigate('Availability') }><Text style = {styles.login_text}>Login</Text></TouchableOpacity>	
		    	 <Text style = {styles.new_text}>New?</Text>

		    	 <TouchableOpacity style = {styles.sign_up_rectangle} onPress ={() => navigate('SignUp') }><Text style = {styles.sign_up_text}>Sign up</Text></TouchableOpacity>	
		    	 <View style = {styles.signup_line} />
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	    	</KeyboardAwareScrollView>
	);
	}
}

// <View style = {styles.header_rectangle} />
// 		    	<Text style = {styles.header_text}>Welcome to SimTa</Text>
 


