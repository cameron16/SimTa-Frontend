import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import styles from "../Styles/AvailabilityStyles"
import Entypo from 'react-native-vector-icons/Entypo';




// import { DrawerNavigator, StackNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';



 var MessageBarAlert = require('react-native-message-bar').MessageBar;
var MessageBarManager = require('react-native-message-bar').MessageBarManager;
export class AvailabilityScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        washer_notify: false,
        washer_ping: false,
        available_washers: 0,
     };
           this.pingUsers = this.pingUsers.bind(this);

    }
    componentDidMount() {
  // Register the alert located on this master page
  // This MessageBar will be accessible from the current (same) component, and from its child component
  // The MessageBar is then declared only once, in your main component.
  MessageBarManager.registerMessageBar(this.refs.alert);
}

componentWillUnmount() {
  // Remove the alert located on this master page from the manager
  MessageBarManager.unregisterMessageBar();
}

pingUsers() {
    // Title or Message is at least Mandatory
    // alertType is not Mandatory, but if no alertType provided, 'info' (blue color) will picked for you

    // Simple show the alert with the manager
    MessageBarManager.showAlert({
      message: "We Pinged Them For You!",
      alertType: 'success'
    });
  }


  notifyAvailable() {

    // Title or Message is at least Mandatory
    // alertType is not Mandatory, but if no alertType provided, 'info' (blue color) will picked for you

    // Simple show the alert with the manager
    MessageBarManager.showAlert({
      message: "Washing Machine Available!",
      alertType: 'success'
    });
  }
 
 
   
   

	 render() {
       
        const {navigate} = this.props.navigation;
        const washer_notify_checkmark = this.state.washer_notify ? <Entypo name="check" size={25} style={styles.washer_notify_checkmark}/>  : <View></View>
        const washer_ping_checkmark = this.state.washer_ping ? <Entypo name="check" size={25} style={styles.washer_ping_checkmark}/>  : <View></View>
	     
      return ( 



	       <View style = {styles.main_screen}>


          <View style = {styles.rectangle_washer} />
          <TouchableOpacity style = {styles.washer_union_rectangle_2} onPress ={() => navigate('Washer')}></TouchableOpacity>  

          <Text style = {styles.washer_text}>Washers</Text>
          <View  style = {styles.washer_polygon_avail} />
          <View style = {styles.washer_ellipse_avail} />
          <Text style = {styles.washer_available_text}>{this.state.available_washers} of 10 Available</Text>

          <TouchableOpacity activeOpacity = {1} style = {styles.washer_rectangle_notify} onPress ={() => this.setState({washer_notify: true})}></TouchableOpacity>  

          <Text style = {styles.washer_notify_text}>Notify When Washer Available</Text>

          <TouchableOpacity activeOpacity = {1} style = {styles.washer_rectangle_ping} onPress ={() => {this.setState({washer_ping: true}); this.pingUsers()}}></TouchableOpacity>  

          <Text style = {styles.washer_ping_text}>Ping Idle Users</Text>



          <View style = {styles.rectangle_dryer} />
          <TouchableOpacity activeOpacity = {1} style = {styles.dryer_union_rectangle_2} onPress={()=>{this.setState({available_washers: 1}); this.notifyAvailable()}}></TouchableOpacity>  
         

          <Text style = {styles.dryer_text}>Dryers</Text>

          <View  style = {styles.dryer_polygon_avail} />
          <View style = {styles.dryer_ellipse_avail} />
          <Text style = {styles.dryer_available_text}>4 of 10 Available</Text>
          {washer_notify_checkmark}
          {washer_ping_checkmark}
          

          <MessageBarAlert ref="alert" />
          
	      </View>
	    );
	  }
	}



           // <TouchableOpacity style = {styles.washer_union_rectangle_1} onPress ={() => navigate('Washer')}></TouchableOpacity> 
           // <TouchableOpacity activeOpacity = {1} style = {styles.dryer_union_rectangle_1} onPress ={() => alert('dryer')}></TouchableOpacity> 



        //    <View style = {styles.washer_rectangle_notify} />


 // <View style = {styles.dryer_union_rectangle_2} />
 //          <View style = {styles.dryer_union_rectangle_1} />

  // <View style = {styles.washer_union_rectangle_2} />
  //         <View style = {styles.washer_union_rectangle_1} />



 // <View style = {styles.rectangle_header} />
 //          <Text style = {styles.header_text}>77 Laundromat</Text>




// const Screens = DrawerNavigator({
//   Home: {
//     screen: BasketHomeScreen,
//     navigationOptions: {
//       drawerLabel: 'Dashboard'
//     }
//   }
// });

// const DrawerNavigation = StackNavigator({
//   DrawerStack: { screen: Screens }
// }, {
//   headerMode: 'float',
//   navigationOptions: ({navigation}) => ({
//     headerStyle: {backgroundColor: '#4C3E54'},
//     title: 'ConNect',
//     headerTintColor: 'white',
//     headerLeft: <Icon name="bars" size={30} color="#fff" style={{ marginLeft: 5 }} onPress={() => navigation.navigate('DrawerToggle')} />
//   })
//})

// export default class App extends React.Component {
//   render() {
//     return (
//       <DrawerNavigation />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });





/*
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
*/


