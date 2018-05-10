import React from 'react';
import {StyleSheet, Alert, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import styles from "../Styles/OvenStyles";

export class OvenScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {

	    	washer_claimed: false,
	    	washer_available: true,

	    }; 
  	}

	render() {

	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}> 
	    	<View style = {styles.main_screen}>
		    	
		    	
		    	
		    	<View style = {styles.Rectangle_status} />
		    	<View style = {styles.Rectangle_2_status} />
		    	<View style = {styles.Rectangle_3_status} />
		    	<Text style = {styles.Current_Status_text}>Current Status: ON</Text>
		    	<FontAwesome name="thermometer-3" size={20} color="#000000" style={styles.Ellipse_thermometer}/>
		    	<Text style = {styles.Temp_F_text}>423 F</Text>
		    	<Entypo name="stopwatch" size={20} color="#000000" style={styles.stop_watch_loc}/>
  				<Text style = {styles.time_min_text}>10 min</Text>

		    	<View style = {styles.Rectangle_past_recipes} />
		    	<View style = {styles.Rectangle_2_past_recipes} />
		    	<View style = {styles.Rectangle_3_past_recipes} />
		    	<Text style = {styles.Past_cooking_details_text}>Past Cooking Details</Text>
		    	<Text style = {styles.last_time_you_baked_text}>The last time you baked chicken:</Text>
		    	<Text style = {styles.past_temp_F_text}>425 F</Text>
		    	<FontAwesome name="thermometer-3" size={20} color="#000000" style={styles.past_thermometer}/>
		    	<Text style = {styles.past_time_min_text}>20 min</Text>
		    	<Entypo name="stopwatch" size={20} color="#000000" style={styles.past_watch}/>
		    	<Text style = {styles.you_rated_text}>You rated the meal: Pretty Good</Text>
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}

