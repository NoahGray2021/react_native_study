import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Card from './Card';
import BankAccount from './BankAccount';
import Loan from './Loan';
import Credit from './Credit';
import Insurance from './Insurance';
import RealEstate from './RealEstate';
import ExtraEstate from './ExtraEstate';
import Documents from './Documents';

class AssetScreen extends Component {
    static navigationOptions = {
        title: 'Asset Home',
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>뫄뫄님, 계좌 및 카드를 등록하여 자산관리를 시작해보세요.</Text>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('')}
                    style={styles.button}
                >
                    <Text>마이데이터 불러오기</Text>
                </TouchableOpacity>
                <Text>자산관리를 위해 자산 정보를 연동해 보세요.</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#e0e0e0',
        padding: 10
    }
})

const Asset = createMaterialTopTabNavigator({
    Asset: AssetScreen,
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

export default Asset;