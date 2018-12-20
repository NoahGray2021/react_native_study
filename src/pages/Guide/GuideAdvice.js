import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class GuideAdvice extends Component {
    static navigationOptions = {
        title: 'GuideAdvice',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>GuideAdvice</Text>
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

export default GuideAdvice;