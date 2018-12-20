import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';

class SimplePassword extends Component {
    static navigationOptions = {
        title: 'SimplePasswordConfirm',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>비밀번호 확인</Text>
                <View style={styles.keypad}>

                </View>
                <Button title='(for Prototype) Next' onPress={() => this.props.navigation.navigate('NiceToMeetYou')} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    keypad: {
        width: 200,
        height: 200,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    }
})

export default SimplePassword;