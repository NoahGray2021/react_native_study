import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Button } from '../../components/common';
import GuideRealEstate from './GuideRealEstate';
import GuideTax from './GuideTax';
import GuidePlan from './GuidePlan';
import GuideInvest from './GuideInvest';
import GuideAdvice from './GuideAdvice';

class GuideHome extends Component {
    static navigationOptions = {
        title: 'Guide Home',
    };

    render() {
        const { container, mini } = styles;

        return (
            <View style={ container }>
                <Text>Guide Index Page</Text>
                <Text>무엇을 도와드릴까요?</Text>
                <Text style={ mini }>
                    혼자서 준비, 해결하기 어려운 경제활동 문제를 도와드릴게요!
                </Text>
                <View>
                    <Button onPress={() => this.props.navigation.navigate('GuideRealEstate')}>
                        <Text>부동산</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('GuideTax')}>
                        <Text>세금</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('GuidePlan')}>
                        <Text>자금 조달</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('GuideInvest')}>
                        <Text>투자</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('GuideAdvice')}>
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

const Guide = createStackNavigator({
    GuideHome:  GuideHome,
    GuideRealEstate: {
        screen: GuideRealEstate,
        navigationOptions: {
            title: 'Real Estate Guide'
        }
    },
    GuideTax: GuideTax,
    GuidePlan: GuidePlan,
    GuideInvest: GuideInvest,
    GuideAdvice: GuideAdvice,
}, {
    initialRouteName: "GuideHome",
    defaultNavigationOptions: {
        headerStyle: {
        backgroundColor: 'skyblue'
        }
    }
});

export default Guide;