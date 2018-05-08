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

	    	washer_claimed: false,
	    	washer_available: true,

	    }; 
  	}

	render() {

		// const claimed_button = this.state.washer_available ? <View></View> : claimed_2
		// const claimed_2 = this.state.washer_claimed ? <TouchableOpacity activeOpacity = {1} style = {styles.claimed_rectangle}><Text style = {styles.claimed_text}>claimed</Text></TouchableOpacity>	: <View></View>
		if (this.state.washer_available == false && this.state.washer_claimed == true){
			claimed_button = <TouchableOpacity activeOpacity = {1} style = {styles.claimed_rectangle}><Text style = {styles.claimed_text}>notified</Text></TouchableOpacity>
		}
		else if (this.state.washer_available == false && this.state.washer_claimed == false){
			claimed_button = <TouchableOpacity style = {styles.claim_rectangle} onPress ={() => this.setState({washer_claimed: true}) }><Text style = {styles.claim_text}>notify</Text></TouchableOpacity>
		}
		else{
			claimed_button = <View></View>
		}
		//const claimed_button = this.state.washer_claimed ? <TouchableOpacity activeOpacity = {1} style = {styles.claimed_rectangle}><Text style = {styles.claimed_text}>claimed</Text></TouchableOpacity>	
  //: <View></View>

  		const machine_color = this.state.washer_available ? <MaterialIcons name="local-laundry-service" size={50} color="#27AE60" style={styles.washer1_png}/> : <MaterialIcons name="local-laundry-service" size={50} color="#9B51E0" style={styles.washer1_png}/>
  		const machine_text = this.state.washer_available ? <Text style = {styles.washer1_text2_1}>Available </Text> : <Text style = {styles.washer1_text2_2}>Starting... </Text>

	    return (
	    	<TouchableWithoutFeedback onPress = {Keyboard.dismiss}> 
	    	<View style = {styles.main_screen}>
		    	
		    	<Text style = {styles.Roosevelt_Island_text}>Roosevelt Island</Text>
		    	
		    	<View style = {styles.washer1_line} />
		    	<Text style = {styles.washer1_text1}>1: </Text>
		    	
		    	{claimed_button}
		    	{machine_color}
		    	{machine_text}
		    	
		    	
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

		    	<View style = {styles.washer5_line} />
		    	<Text style = {styles.washer5_text1}>5: </Text>
		    	<Text style = {styles.washer5_text2}>Idle for 16 min</Text>
		    	<MaterialIcons name="local-laundry-service" size={50} color="#F2994A" style={styles.washer5_png}/>

		    	<View style = {styles.washer6_line} /> 
		    	<Text style = {styles.washer6_text1}>6: </Text>
		    	


		    	<TouchableOpacity activeOpacity={1} onPress = {()=> {this.setState({washer_available:false})} }><Text style = {styles.washer6_text2}>Idle for 15 min</Text></TouchableOpacity>
 				
 				<TouchableOpacity style = {{position: 'absolute',width: 375,height: 50,left: -2,top: -63+580,borderColor: '#F2F2F2'}} activeOpacity={1} onPress = {()=> {this.setState({washer_available:false})} }></TouchableOpacity>


		    	<MaterialIcons name="local-laundry-service" size={50} color="#F2994A" style={styles.washer6_png}/>
		    	
	    		
	    	</View>
	    	</TouchableWithoutFeedback>
	);
	}
}


		    	//<TouchableOpacity style = {styles.claim_rectangle} onPress ={() => this.setState({washer_claimed: true}) }><Text style = {styles.claim_text}>claim</Text></TouchableOpacity>


// this.setState({washer_available:false})

// {/*<Text style = {styles.washer1_text2_1}>Available </Text>*/}
// 		    	{//<Text style = {styles.washer1_text2_2}>Starting... </Text>}
// 		    	{//<MaterialIcons name="local-laundry-service" size={50} color="#27AE60" style={styles.washer1_png}/>}
// 		    	{//<MaterialIcons name="local-laundry-service" size={50} color="#9B51E0" style={styles.washer1_png}/>}


//<TouchableOpacity style = {styles.load_rectangle} onPress ={() => this.setState({washer_loaded:true}) }><Text style = {styles.load_text}>load</Text></TouchableOpacity>	
		  
		    	//{loaded_button}
//<TouchableOpacity style = {styles.load_rectangle} onPress ={() => this.setState({washer_loaded:true}) }><Text style = {styles.load_text}>load</Text></TouchableOpacity>	
		    	//{loaded_button}
