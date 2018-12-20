import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../components/common';

import Asset from './Asset/Asset';
import CreditScreen from './Credit/Credit';
import LoanScreen from './Loan/Loan';
import ExtraScreen from './Extra/Extra';
import DocsScreen from './Docs/Docs';

import ChatBot from '../../pages/ChatBot/ChatBot'
import DataImport from '../../pages/DataImport/DataImport'


class MyDataHome extends Component {
  static navigationOptions = {
      title: 'Home',
  };

  openChatbot() {
      this.props.navigation.navigate('ChatBot')
  }

  render() {
      const { container, chatbot } = styles;

      return (
          <View style={container}>
              <Text>MyData Index Page</Text>
              <View>
                  <Button>
                      <Text>자산관리 하러가기</Text>
                  </Button>
                  <Button>
                      <Text>세금납부 하러가기</Text>
                  </Button>
                  <Button>
                      <Text>대출상환 관리가기</Text>
                  </Button>
              </View>
              <View>
                  <Button>
                      <Text>전문가 도움받기</Text>
                  </Button>
              </View>
              <View style={chatbot}>
                  <Button onPress={this.openChatbot.bind(this)}>
                      <Text>챗봇</Text>
                  </Button>
              </View>
          </View>
      );
  }

  // <Button title="Sign Out" onPress={this._signOutAsync} />

  _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
  };
};

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     justifyContent: 'center', 
     alignItems: 'center'
  },
  chatbot: {
      position: 'absolute',
      right: 10,
      bottom: 10
  }
})

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
    ChatBot: ChatBot,
    DataImport: {
      screen: DataImport,
      navigationOptions: ({
        title: 'My Data Import'
      })
    }
  }, {
    initialRouteName: 'MyDataIndex',
    defaultNavigationOptions: {
        title: 'My Data'
    }
  }
);

export default MyData;