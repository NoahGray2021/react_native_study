import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../components/common';

import TransactionHistory from './TransactionHistory'
import Calendar from './Calendar'
import Budget from './Budget'
import Statistics from './Statistics'

const AssetHeaderTab = createMaterialTopTabNavigator({
    TransactionHistory,
    Calendar,
    Budget,
    Statistics,
}, {
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      upperCaseLabel: false,
      scrollEnabled: false,
      tabStyle: {
        height: 32,
        padding: 0,
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

const Asset = createStackNavigator({
    AssetIndex: AssetHeaderTab,
  }, {
    initialRouteName: 'AssetIndex',
    defaultNavigationOptions: {
        title: '<--  자산관리 2018. 12  -->'
    }
  });

export default Asset;