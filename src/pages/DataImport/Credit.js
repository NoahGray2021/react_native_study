import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Credit extends Component {
    static navigationOptions = {
        title: 'Credit',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>My Data > Asset: Credit</Text>
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

export default Credit;