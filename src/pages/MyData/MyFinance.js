import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class MyFinanace extends Component {
    static navigationOptions = {
        title: 'My금융',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>MyFinanace</Text>
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

export default MyFinanace;