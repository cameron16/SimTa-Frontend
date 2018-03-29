import React from 'react';
import { Text, View, Button } from 'react-native';

export class BasketHomeScreen extends React.Component {

  	send_post(){
  		fetch("https://smartapp-196617.appspot.com/laundry", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "username": 'Cam from app',
              "password": 'my pass',
              "first_name": 'ok',
              "last_name": 'last',
              "phone_number":'out',
            })
          }).then(function(response){
            if (response.status >= 400){
              console.log("there was an error")
              Alert.alert(
                'The username you entered is already in use'
              ) 
              // return false;
            } 
            else{
              console.log("this worked")
  			}
  		})

  	}


	 render() {
	    return (
	      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	        <Text>Your Basket</Text>
	        <Text>What is good</Text>
	        <Button onPress ={() => this.send_post()} title = 'I Am Prepared For Greatness'/>

	      </View>
	    );
	  }
	}

