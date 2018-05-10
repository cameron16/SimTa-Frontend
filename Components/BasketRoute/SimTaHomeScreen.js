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
		const {navigate} = this.props.navigation;
	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
	    	<View style = {styles.main_screen}>
		    	

		    	<TouchableOpacity style = {styles.LAUNDRY_rectangle} onPress ={() => navigate('Laundry') }>
		    		<MaterialIcons name="local-laundry-service" size={50} color="#6FCF97" style={styles.Rectangle_laundry_body_2}/>
			    	<Text style = {styles.LAUNDRY_text_2}>LAUNDRY</Text>
		    	</TouchableOpacity>	



		    	
	    		
		    	<TouchableOpacity style = {styles.OVEN_rectangle} onPress ={() => navigate('Oven') }>
			    	<MaterialCommunityIcons name="stove" size={50} color="#6FCF97" style={styles.Rectangle_oven_body}/>
			    	<Text style = {styles.OVEN_text}>OVEN</Text>
		    	</TouchableOpacity>

		    	<TouchableOpacity style = {styles.FRIDGE_rectangle} onPress ={() => alert('Company Vision - SimTa is working on that!')  }>
			    	<MaterialCommunityIcons name="fridge" size={50} color="#6FCF97" style={styles.Rectangle_fridge_body}/>
			    	<Text style = {styles.FRIDGE_text}>FRIDGE</Text>
		    	</TouchableOpacity>
		    	
		    	<TouchableOpacity style = {styles.DISHWASHER_rectangle} onPress ={() => alert('Company Vision - SimTa is working on that!') }>	
		    	<Entypo name="box" size={50} color="#6FCF97" style={styles.dishwasher_body_box}/>
		    	<Text style = {styles.Dishwasher_text}>DISHWASHER</Text>
		    	</TouchableOpacity>
		    	

		    	
		    	
	    		 
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}


// <View style = {styles.LAUNDRY_rectangle} />
// 			    	<Text style = {styles.LAUNDRY_text}>LAUNDRY</Text>
// 			   		<MaterialIcons name="local-laundry-service" size={50} color="#6FCF97" style={styles.Rectangle_laundry_body}/>


		    //	<Image source ={require('../../Pictures/dishwasher_logo.png')} style = {styles.dishwasher_body} />




// <View style = {styles.LAUNDRY_rectangle} />
// 		    	<Text style = {styles.LAUNDRY_text}>LAUNDRY</Text>
// 		   		<MaterialIcons name="local-laundry-service" size={50} color="#6FCF97" style={styles.Rectangle_laundry_body}/>




// <View style = {styles.component}>
// 		    		<View style = {styles.LAUNDR_rectangle} />
// 		    		<Text style = {styles.LAUNDRY_text} />

// 		    	</View>


//<View style = {styles.rectangle_header} />
//<Text style = {styles.Laundry_text}>Laundry</Text>