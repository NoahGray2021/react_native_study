import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class SolutionInvest extends Component {
    static navigationOptions = {
        title: 'SolutionInvest',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>SolutionInvest</Text>
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

export default SolutionInvest;