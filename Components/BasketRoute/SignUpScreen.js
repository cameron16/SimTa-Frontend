import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';




import styles from "../Styles/SignupStyles"

export class SignUpScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	name: "",
	    	email: "",
	    	password: "",
	    	confirm_password: ""

	   };
  	}

	render() {
	    return (
	    	<KeyboardAwareScrollView>
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>

	    	<View style = {styles.main_screen}>
		    	<View style = {styles.rectangle_header} />
		    	<Text style = {styles.create_account_text}>Create Account</Text>

		    	


		    	<TextInput
			        style={styles.name_text}
			        placeholder = "name"
			        onChangeText={(name) => this.setState({name})}
			        value={this.state.name}/>
		    	<View style = {styles.name_line} />
		    	
		    	<TextInput
			        style={styles.email_text}
			        placeholder = "email"
			        onChangeText={(email) => this.setState({email})}
			        value={this.state.email}/>
		    	<View style = {styles.email_line} />

		    	<TextInput
			        style={styles.password_text}
			        placeholder = "password"
			        onChangeText={(password) => this.setState({password})}
			        value={this.state.password}/>
		    	<View style = {styles.password_line} />

		    	<TextInput
			        style={styles.confirm_password_text}
			        placeholder = "confirm password"
			        onChangeText={(confirm_password) => this.setState({confirm_password})}
			        value={this.state.confirm_password}/>
		    	<View style = {styles.confirm_password_line} />

		    	<Foundation name="mail" size={30} color="#000000" style={styles.envelope_body}/>
		    	<Feather name="user" size={30} color="#000000" style={styles.person_body}/>
		    	<EvilIcons name="lock" size={30} color="#000000" style={styles.lock_pass}/>
		    	<EvilIcons name="lock" size={30} color="#000000" style={styles.lock_confirm_pass}/>

		    	<TouchableOpacity style = {styles.search_laundromat_rectangle} onPress={() => {Alert.alert('Search Laundromat');}}><Text style = {styles.search_laundromat_text}>Search {"\n"} Laundromats</Text></TouchableOpacity>	
		    	<TouchableOpacity style = {styles.add_apartment_rectangle} onPress={() => {Alert.alert('Add Apartment');}}><Text style = {styles.add_your_apartment_text}>Add Your {"\n"} Apartment</Text></TouchableOpacity>	

		    	 
		    	
	    		
	    	</View>




	    	
	    	</TouchableWithoutFeedback>
	    	</KeyboardAwareScrollView>
	);
	}
}
