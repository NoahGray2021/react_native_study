import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Insurance extends Component {
    static navigationOptions = {
        title: 'Insurance',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>My Data > Asset: Insurance</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default Insurance;