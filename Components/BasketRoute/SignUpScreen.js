import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import styles from "../Styles/HomeStyles"

export class HomeScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	email: "",
	    	password: ""

	   };
  	}

	render() {
	    return (
	    	<KeyboardAwareScrollView>
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	
	    	</TouchableWithoutFeedback>
	    	</KeyboardAwareScrollView>
	);
	}
}
