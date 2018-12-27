import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import { Button } from '../../components/common';


class SolutionRealEstateScreen extends Component {
    static navigationOptions = {
        title: 'Solution List',
    };

    onButtonPress() {
        this.props.navigation.navigate('FindHouse')
    }

    render() {
        const { container, margin } = styles;

        return (
            <View style={container}>
                <Text style={margin}>부동산에 어떤 문제가 있으신가요?</Text>
                <View>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        <Text>집 구하기</Text>
                    </Button>
                    <Button>
                        <Text>집 팔기</Text>
                    </Button>
                </View>
            </View>
        );
    }
};

class FindHouse extends Component {
    static navigationOptions = {
        title: '집 구하기',
    };

    render() {
        const { container, margin } = styles;

        return (
            <View style={container}>
                <Text style={margin}>원하는 집의 형태를 결정하셨나요?</Text>
                <View>
                    <Button>
                        <Text>비교해보고 결정하겠다.</Text>
                    </Button>
                    <Button>
                        <Text>월세</Text>
                    </Button>
                    <Button>
                        <Text>전세</Text>
                    </Button>
                    <Button>
                        <Text>자가</Text>
                    </Button>
                    
                </View>
            </View>
        );
    }
};

class SellHouse extends Component {
    static navigationOptions = {
        title: '집 팔기',
    };

    render() {
        const { container, margin } = styles;

        return (
            <View style={container}>
                <Text>집 팔기</Text>
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
    margin: {
        marginTop: 20,
        marginBottom: 20,
    }
})

const SolutionRealEstate = createMaterialTopTabNavigator({
    SolutionRealEstateScreen: SolutionRealEstateScreen,
    FindHouse: FindHouse,
    SellHouse: SellHouse, 
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        upperCaseLabel: false,
        scrollEnabled: false,
        tabStyle: {
            height: 30,
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
})

export default SolutionRealEstate;