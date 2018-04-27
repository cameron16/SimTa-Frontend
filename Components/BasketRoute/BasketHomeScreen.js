import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

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
	      <View >
	        
          <Text style = {styles.washer}>Washer </Text>
          <View style = {styles.union} />
	      </View>
	    );
	  }
	}

          // <Button onPress ={() => this.send_post()} title = 'I Am Prepared For Greatness'/>



const styles = StyleSheet.create ({
   washer: {
      position: 'absolute',
      width: 112,
      height: 41,
      left: 33,
      top: 105,

      fontFamily: 'Cochin',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',

      color: '#F2F2F2',
   },
   union:{
      position: 'absolute',
      width: 320,
      height: 43,
      left: 27.04,
      top: 105.5,

      backgroundColor: '#2D9CDB',

   }

})
