import React from 'react';
import { Text, View, Button } from 'react-native';
import { TabNavigator, TabBarBottom, StackNavigator, NavigationActions } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SearchHomeScreen} from './Components/SearchRoute/SearchHomeScreen'
import {LaundromatListScreen} from './Components/SearchRoute/LaundromatListScreen'
import {BasketHomeScreen} from './Components/BasketRoute/BasketHomeScreen'


// static navigationOptions = { title: 'Welcome', header: null };


const BasketRouteNavigator = StackNavigator({

  BasketHome: {
    screen: BasketHomeScreen,
    navigationOptions: {
      // headerTitle: 'Basket',
      header: null,
    },
  },
  
});

// ,navigationOptions:{ header:{ visible:false }});


const SearchRouteNavigator = StackNavigator({

  SearchHome: {
    screen: SearchHomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  LaundromatList: {
    screen: LaundromatListScreen,
    navigationOptions:{
      headerTitle: 'Laundromats'
    },

  },

});


export default TabNavigator(
  {
    SearchRoute: { screen: SearchRouteNavigator },
    Basket: { screen: BasketRouteNavigator },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'SearchRoute') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Basket') {
          iconName = `ios-basket${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);