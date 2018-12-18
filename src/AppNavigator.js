import React from 'react';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  }, {
      initialRouteName: 'Home',
  });

  export default AppNavigator;