import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';

class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title='Facebook Login' onPress={() => this.props.navigation.navigate('SimplePassword')} />
                <Button title='Google Login' onPress={() => this.props.navigation.navigate('SimplePassword')} />
                <Button title='KaKaotalk Login' onPress={() => this.props.navigation.navigate('SimplePassword')} />
                <Button title='이메일로 가입하기' onPress={() => this.props.navigation.navigate('SimplePassword')} />
                <Button title='휴대폰 인증 가입하기' onPress={() => this.props.navigation.navigate('SimplePassword')} />
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
    checkboxStyle: {
        padding: 10
    }
})

export default SignUp;