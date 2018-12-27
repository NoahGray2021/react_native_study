import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Button } from '../../components/common';
import SolutionRealEstate from './SolutionRealEstate';
import SolutionTax from './SolutionTax';
import SolutionPlan from './SolutionPlan';
import SolutionInvest from './SolutionInvest';
import SolutionAdvice from './SolutionAdvice';

class SolutionHome extends Component {
    static navigationOptions = {
        title: 'Solution Home',
    };

    render() {
        const { container, mini } = styles;

        return (
            <View style={ container }>
                <Text>Solution(Guide) Index Page</Text>
                <Text>무엇을 도와드릴까요?</Text>
                <Text style={ mini }>
                    혼자서 준비, 해결하기 어려운 경제활동 문제를 도와드릴게요!
                </Text>
                <View>
                    <Button onPress={() => this.props.navigation.navigate('SolutionRealEstate')}>
                        <Text>부동산</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SolutionTax')}>
                        <Text>세금</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SolutionPlan')}>
                        <Text>자금 조달</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SolutionInvest')}>
                        <Text>투자</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('SolutionAdvice')}>
                        <Text>모르겠다</Text>
                    </Button>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    mini: {
        fontSize: 10,
        color: '#ccc',
        marginTop: 50,
        marginBottom: 50,
    }
})

const Solution = createStackNavigator({
    SolutionHome:  SolutionHome,
    SolutionRealEstate: {
        screen: SolutionRealEstate,
        navigationOptions: {
            title: 'Real Estate Solution'
        }
    },
    SolutionTax: SolutionTax,
    SolutionPlan: SolutionPlan,
    SolutionInvest: SolutionInvest,
    SolutionAdvice: SolutionAdvice,
}, {
    initialRouteName: "SolutionHome",
    defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: 'skyblue'
        }
    }
});

export default Solution;