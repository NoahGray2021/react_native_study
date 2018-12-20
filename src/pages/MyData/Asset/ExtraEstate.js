import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class ExtraEstate extends Component {
    static navigationOptions = {
        title: 'ExtraEstate',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>My Data > Asset: ExtraEstate</Text>
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

export default ExtraEstate;