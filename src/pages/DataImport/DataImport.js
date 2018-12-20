import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { 
    createStackNavigator, 
    createMaterialTopTabNavigator,
} from 'react-navigation';

import Card from './Card';
import BankAccount from './BankAccount';
import Loan from './Loan';
import Credit from './Credit';
import Insurance from './Insurance';
import RealEstate from './RealEstate';
import ExtraEstate from './ExtraEstate';
import Documents from './Documents';

const DataImport = createMaterialTopTabNavigator({
    Card: Card,
    BankAccount: BankAccount,
    Loan: Loan,
    Credit: Credit,
    Insurance: Insurance,
    RealEstate: RealEstate,
    ExtraEstate: ExtraEstate,
    Documents: Documents,  
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
})

export default DataImport;