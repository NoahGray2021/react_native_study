import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SolutionAdvice extends Component {
    static navigationOptions = {
        title: 'SolutionAdvice',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>SolutionAdvice</Text>
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

export default SolutionAdvice;