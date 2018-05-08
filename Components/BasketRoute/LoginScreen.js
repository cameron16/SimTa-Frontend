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
	   this._sendLoginPost = this._sendLoginPost.bind(this);
	   this._checkLogin = this._checkLogin.bind(this);

  	}

  	_sendLoginPost(){
  		const {navigate} = this.props.navigation;
  		fetch("https://smartapp-196617.appspot.com/user", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "email": this.state.email,
            "password": this.state.password
          })
        }).then(function(response){
            if (response.status >= 400){
                Alert.alert(
                  'This email does not match this password'
                ) 
                console.log(response);
              } 
              else{
              	console.log('this worked')
              	navigate('SimTaHome');
  			}
  		})
    }
    _checkLogin(){
    	if (this.state.email.length == 0){
    		Alert.alert('Please enter your email address')
    	}
    	else if (this.state.password.length == 0){
    		Alert.alert('Please enter your password')
    	}
    	else{
    		this._sendLoginPost();
    	}

    }

 
	render() {
		    const {navigate} = this.props.navigation;

	    return (
	    	<KeyboardAwareScrollView>
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
	    	
	    		
		    	<Image source ={require('../../Pictures/simta_logo.png')} style = {styles.logo} />
		    	<View style = {styles.email_line} />
		    	<Foundation name="mail" size={30} style={styles.envelope_icon}/>
		    	<TextInput
			        style={styles.email_text}
			        placeholder = "email"
			        onChangeText={(email) => this.setState({email})}
			        value={this.state.email}/>
		    	<View style = {styles.password_line} />
		    	<EvilIcons name="lock" size={30} style={styles.lock_icon}/>

		    	<TextInput
			        style={styles.password_text}
			        placeholder = "password"
			        onChangeText={(password) => this.setState({password})}
			        secureTextEntry={true}
			        value={this.state.password}/>
		    	
		    	 <TouchableOpacity style = {styles.login_box} onPress ={() => this._checkLogin() }><Text style = {styles.login_text}>Login</Text></TouchableOpacity>	
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
 


