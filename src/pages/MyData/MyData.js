import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../components/common';

import MyFinance from './MyFinance';
import Drive from './Drive';
import Report from './Report';

import ChatBot from '../../pages/ChatBot/ChatBot'
import DataImport from '../../pages/DataImport/DataImport'

const MyDataHeaderTab = createMaterialTopTabNavigator({
    MyFinance,
    Drive,
    Report,
}, {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      upperCaseLabel: false,
      scrollEnabled: false,
      tabStyle: {
        height: 48,
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