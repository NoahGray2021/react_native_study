import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class TransactionCard extends Component {
    static navigationOptions = {
        title: '소비내역',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <Text>TransactionCard</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default TransactionCard;