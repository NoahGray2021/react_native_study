import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SolutionTax extends Component {
    static navigationOptions = {
        title: 'SolutionTax',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>SolutionTax</Text>
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

export default SolutionTax;