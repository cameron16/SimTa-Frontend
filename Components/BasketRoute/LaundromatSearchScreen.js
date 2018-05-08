import React from 'react';
import {View, Text, Alert, TextInput, TouchableOpacity} from 'react-native';



import styles from "../Styles/LaundromatSearchStyles";


export class LaundromatSearchScreen extends React.Component{
	constructor(props){
		super(props);
		this.state = {
	    }; 
	    this._onSearch = this._onSearch.bind(this);

		

	}


	_onSearch(){
		const {navigate} = this.props.navigation;
		navigate('Availability',{location: '570West45'});
	
	}
	
	render() {
		const {navigate} = this.props.navigation;
	  return (
	  	<View style = {styles.main_screen}>
	  	<TextInput
	        style={styles.name_text}
	        placeholderStyle={styles.name_text_place}
	        placeholder = "Tell Us Your Preferred Laundromat"
	        placeholderTextColor = '#2D9CDB'

	        onChangeText={(name) => this.setState({name})}
	        value={this.state.name}/>
    	<View style = {styles.name_line} />
    	
    	<TouchableOpacity style = {styles.login_box} onPress ={() => this._onSearch() }>
    		<Text style = {styles.login_text}>Enter</Text>
    	</TouchableOpacity> 



	    </View>

	    
	  )
	}


}



