import React from 'react';
import { Text, View, Button , ScrollView, StyleSheet, Dimensions} from 'react-native';
import { MapView, Marker } from 'expo';
import SearchBar from 'react-native-searchbar' 

var screen_width = Dimensions.get('window').width; //full width

export class SearchHomeScreen extends React.Component {
  constructor (props) {
      super(props);
        this.state = {
          markers: [{
            id: 1,
            title: 'Todd Layne Cleaners and Laundromat',
            coordinates: {
             latitude: 40.7721902, longitude: -73.9569894
            },
          },
          {
            id: 2,
            title: '77 Laundromat',
            coordinates: {
             latitude: 40.7712671, longitude: -73.95368839999998
            },  
          }],


          recently_visited: [
         {'name': 'Roosevelt Laundromat', 'id': 1},
         {'name': 'LIC Laundromat', 'id': 2},
         {'name': 'How are you Laundro', 'id': 3},
         {'name': 'Carlos', 'id': 4},
         {'name': 'House Cleaners', 'id': 5},
         {'name': 'Pantie Laundro', 'id': 6},
         {'name': 'Strip Laundro', 'id': 7},
         {'name': 'Crazy Laundromat', 'id': 8},
         {'name': 'Crazy Ass Laundromat', 'id': 9},
         {'name': 'You Still Scroll', 'id': 10},
         {'name': 'Blue Laundro', 'id': 11},
         {'name': 'Weed Laundro', 'id': 12},
         {'name': 'G Strings Only Laundro', 'id': 13},
         {'name': 'Cum here Cleaners', 'id': 14},
       
      ]
      }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{backgroundColor: '#ADD8E6', flex: 1}}>
        <View style  ={{alignItems: 'center' }}>
          <Text>SiM-TA</Text>
          <Text>Find a Laundromat Near you!</Text>
   
        </View>

        <MapView  style={{ height: 250}} initialRegion={{ latitude: 40.7545934, longitude: -73.95609589999998, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }}>
            {this.state.markers.map(marker => (
            <MapView.Marker key = {marker.id} coordinate={marker.coordinates} title={marker.title}/>))}
        </MapView>
        <View style  ={{alignItems: 'center' }}>
          <Button  onPress ={() => navigate('LaundromatList') } title = 'Search'/>
          <Text>Select from Recently Visited</Text>
          
          <ScrollView style = {{height: 218}}>
               {
                  this.state.recently_visited.map((item, index) => (
                     <View key = {item.id} style = {styles.recently_visited_laundromats}>
                        <Text style={{textAlignVertical: "center",textAlign: "center",}}>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create ({
   recently_visited_laundromats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 12,
      width: screen_width-50, 
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   }
})