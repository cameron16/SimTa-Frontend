import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';

import styles from "../Styles/AvailabilityStyles"
import Entypo from 'react-native-vector-icons/Entypo';

import TimerMixin from 'react-timer-mixin';


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
        dryer_notify: false,
        dryer_ping: false,
        available_washers: 0,
        available_washers_notification_sent: 1,
        available_dryers: 0,
        available_dryers_notification_sent: 1,
     };
           this.pingUsers = this.pingUsers.bind(this);
           this._getWasherInfo = this._getWasherInfo.bind(this);
           this._checkWasherAvailability = this._checkWasherAvailability.bind(this);

           this._getDryerInfo = this._getDryerInfo.bind(this);
           this._checkDryerAvailability = this._checkDryerAvailability.bind(this);


    }
    mixins: [TimerMixin];

    componentDidMount() {
    // Register the alert located on this master page
    // This MessageBar will be accessible from the current (same) component, and from its child component
    // The MessageBar is then declared only once, in your main component.
    MessageBarManager.registerMessageBar(this.refs.alert);
    //setTimeout(() =>console.log("hello"),500);
      this.interval = setInterval(() => {
          this._getWasherInfo();
          this._checkWasherAvailability();
          this._getDryerInfo();
          this._checkDryerAvailability();

      }, 1000); //check every 1 second

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

  notifyWasherAvailable() {

    // Title or Message is at least Mandatory
    // alertType is not Mandatory, but if no alertType provided, 'info' (blue color) will picked for you

    // Simple show the alert with the manager
    MessageBarManager.showAlert({
      message: "Washing Machine Available!",
      alertType: 'success'
    });
  }

  notifyDryerAvailable() {

    // Title or Message is at least Mandatory
    // alertType is not Mandatory, but if no alertType provided, 'info' (blue color) will picked for you

    // Simple show the alert with the manager
    MessageBarManager.showAlert({
      message: "Drying Machine Available!",
      alertType: 'success'
    });
  }

  _checkWasherAvailability(){
    if (this.state.available_washers == 0){
      this.setState({'available_washers_notification_sent': 0})
    }
    else if (this.state.available_washers >0 && this.state.available_washers_notification_sent == 0 && this.state.washer_notify == true){
      this.notifyWasherAvailable();
      this.setState({'available_washers_notification_sent':1})
    } 
  }

   _checkDryerAvailability(){
    if (this.state.available_dryers == 0){
      this.setState({'available_dryers_notification_sent': 0})
    }
    else if (this.state.available_dryers >0 && this.state.available_dryers_notification_sent == 0){
      this.notifyDryerAvailable();
      this.setState({'available_dryers_notification_sent':1})
    } 
  }

   _getDryerInfo(){
    var location = this.props.navigation.state.params.location;
    var url = "https://smartapp-196617.appspot.com/dryer/" + location;
    fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          }).then(function(response){
            if (response.status >= 400){
              console.log("there was an error")
              Alert.alert(
                'We are experiencing technical difficulties. Please try again'
              ) 
            } 
            else{
              var myResponseBody = response._bodyInit.replace(/\\/g, "")
              var splitResponse = myResponseBody.split('"_id"');
              myArray=[]
              console.log(splitResponse);
              for (i =1; i<splitResponse.length; i++){
                var dryer_num_index = splitResponse[i].indexOf('dryer_num')
                var dryer_status_index = splitResponse[i].indexOf('laundry_status')
                dryer_num = splitResponse[i].substring(dryer_num_index).match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;});
                dryer_status = splitResponse[i].substring(dryer_status_index).match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;});
                thisObject = {'dryer_num': dryer_num[0], 'dryer_status': dryer_status[0]}
                myArray.push(thisObject);
              }
              console.log(myArray);
              var available_dryers=0;
              for (i =0; i<myArray.length; i++){
                if (myArray[i].dryer_status == 1){
                    available_dryers = available_dryers +1;
                }
              }
              this.setState({'available_dryers': available_dryers})

            }
      }.bind(this)); 
  }


  _getWasherInfo(){
    var location = this.props.navigation.state.params.location;
    var url = "https://smartapp-196617.appspot.com/washer/" + location;
    fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          }).then(function(response){
            if (response.status >= 400){
              console.log("there was an error")
              Alert.alert(
                'We are experiencing technical difficulties. Please try again'
              ) 
            } 
            else{
              var myResponseBody = response._bodyInit.replace(/\\/g, "")
              var splitResponse = myResponseBody.split('"_id"');
              myArray=[]
              for (i =1; i<splitResponse.length; i++){
                var washer_num_index = splitResponse[i].indexOf('washer_num')
                washer_num_and_status = splitResponse[i].substring(washer_num_index).match(/\d+\.\d+|\d+\b|\d+(?=\w)/g).map(function (v) {return +v;});
                thisObject = {'washer_num': washer_num_and_status[0], 'washer_status': washer_num_and_status[1]}
                myArray.push(thisObject);
              }
              var available_washers=0;
              for (i =0; i<myArray.length; i++){
                if (myArray[i].washer_status == 1){
                    available_washers = available_washers +1;
                }
              }
              this.setState({'available_washers': available_washers})

            }
      }.bind(this)); 
  }

  componentWillMount(){
    this._getWasherInfo();  
    this._getDryerInfo();
  }

	 render() {
       
        const {navigate} = this.props.navigation;
        const washer_notify_checkmark = this.state.washer_notify ? <Entypo name="check" size={25} style={styles.washer_notify_checkmark}/>  : <View></View>
        const washer_ping_checkmark = this.state.washer_ping ? <Entypo name="check" size={25} style={styles.washer_ping_checkmark}/>  : <View></View>
        const dryer_notify_checkmark = this.state.dryer_notify ? <Entypo name="check" size={25} style={styles.dryer_notify_checkmark}/>  : <View></View>
        const dryer_ping_checkmark = this.state.dryer_ping ? <Entypo name="check" size={25} style={styles.dryer_ping_checkmark}/>  : <View></View>
       	     
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
          <TouchableOpacity activeOpacity = {1} style = {styles.dryer_union_rectangle_2} onPress={()=>alert('hi')}></TouchableOpacity>  

          <Text style = {styles.dryer_text}>Dryers</Text>

          <View  style = {styles.dryer_polygon_avail} />
          <View style = {styles.dryer_ellipse_avail} />
          <Text style = {styles.dryer_available_text}>{this.state.available_dryers} of 10 Available</Text>

          <TouchableOpacity activeOpacity = {1} style = {styles.dryer_rectangle_notify} onPress ={() => this.setState({dryer_notify: true})}></TouchableOpacity>  

          <Text style = {styles.dryer_notify_text}>Notify When Dryer Available</Text>

          <TouchableOpacity activeOpacity = {1} style = {styles.dryer_rectangle_ping} onPress ={() => {this.setState({dryer_ping: true}); this.pingUsers()}}></TouchableOpacity>  

          <Text style = {styles.dryer_ping_text}>Ping Idle Users</Text>
          {washer_notify_checkmark}
          {washer_ping_checkmark}
          {dryer_notify_checkmark}
          {dryer_ping_checkmark}
          
          <MessageBarAlert ref="alert" />
          
	      </View>
	    );
	  }
	}


