import React from 'react';
import {View, Text, Alert} from 'react-native';


import CodeInput from 'react-native-confirmation-code-input';

import styles from "../Styles/ApartmentLaundryCodeStyles";


export class ApartmentLaundryCodeScreen extends React.Component{
	constructor(props){
		super(props);
		this.state ={};
		this._onFulfill = this._onFulfill.bind(this);

	}
	_onFulfill(code){
		const {navigate} = this.props.navigation;
		
		Alert.alert(
		  'Your code: ' +code,
		  'We do not have an apartment signed up yet so we will take you to 550 West',
		  [
		    {text: 'Okay!', onPress: () => navigate('Availability',{location: '570West45'})},
		  ],
		)
		

	}
	render() {
	  return (
	  	<View style = {styles.main_screen}>
		  	<Text style = {styles.text_directions}>Please Enter Your Apartment Code</Text>
		  	<View style = {styles.code_input}>
			    <CodeInput
			      ref="codeInputRef1"
			      className={'border-b'}
			      space={5}
			      activeColor='#56CCF2'
		      	  inactiveColor='#56CCF2'
			      size={30}
			      inputPosition='center'
			      keyboardType="numeric"
			      onFulfill={(code) => this._onFulfill(code)}
			    />
		    </View>
	    </View>

	    

	    
	  )
	}


}



      // containerStyle={{ marginTop: 30 }}
      // codeInputStyle={{ borderWidth: 1.5 }}

