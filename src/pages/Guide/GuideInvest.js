import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class GuideInvest extends Component {
    static navigationOptions = {
        title: 'GuideInvest',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>GuideInvest</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default GuideInvest;