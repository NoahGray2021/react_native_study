import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Asset from './Asset/Asset';
import CreditScreen from './Credit/Credit';
import LoanScreen from './Loan/Loan';
import ExtraScreen from './Extra/Extra';
import DocsScreen from './Docs/Docs';

class MyDataHome extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MyData Index Page</Text>
            </View>
        );
    }

    // <Button title="Sign Out" onPress={this._signOutAsync} />

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
};

const Credit = createStackNavigator({
    Credit: CreditScreen,
}, {
  initialRouteName: 'Credit',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'brown'
    }
  }  
})

const Loan = createStackNavigator({
    Loan: LoanScreen,
}, {
  initialRouteName: 'Loan',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'brown'
    }
  }  
})

const Extra = createStackNavigator({
    Extra: ExtraScreen,
}, {
  initialRouteName: 'Extra',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'purple'
    }
  }  
})

const Docs = createStackNavigator({
    Docs: DocsScreen,
}, {
  initialRouteName: 'Docs',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'purple'
    }
  }  
})


const MyDataHeaderTab = createMaterialTopTabNavigator({
    MyDataHome,
    Asset,
    Credit,
    Loan,
    Extra,
    Docs,
}, {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      upperCaseLabel: false,
      scrollEnabled: true,
      tabStyle: {
        height: 48,
        width: 80,
      },
      indicatorStyle: {
        backgroundColor: 'gray',
      },
      style: {
        fontWeight: 500,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: {x: 0, y: 5}
      }
    },
  }
)

const MyData = createStackNavigator({
    MyDataIndex: MyDataHeaderTab,
  }, {
    initialRouteName: 'MyDataIndex',
    defaultNavigationOptions: {
        title: 'My Data'
    }
  }
);

export default MyData;