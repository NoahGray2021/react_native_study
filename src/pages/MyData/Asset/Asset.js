import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import Card from './Card';
import BankAccount from './BankAccount';
import Loan from './Loan';
import Credit from './Credit';
import Insurance from './Insurance';
import RealEstate from './RealEstate';
import ExtraEstate from './ExtraEstate';
import Documents from './Documents';

import { Button } from '../../../components/common';

class AssetScreen extends Component {
    static navigationOptions = {
        title: 'Asset Home',
    };


    onButtonPress() {
        this.props.navigation.navigate('DataImport')
    }

    render() {
        const { container, guideNote } = styles;

        return (
            <View style={container}>
                <Text>뫄뫄님, 계좌 및 카드를 등록하여</Text>
                <Text style={{ marginBottom: 100 }}>자산관리를 시작해보세요.</Text>
                <Button onPress={this.onButtonPress.bind(this)}>
                    <Text>마이데이터 불러오기</Text>
                </Button>
                <Text style={guideNote}>자산관리를 위해 자산 정보를 연동해 보세요.</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    guideNote: {
        color: '#ccc',
        marginTop: 100
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