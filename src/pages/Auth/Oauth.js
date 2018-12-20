import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CheckBox from 'react-native-check-box';

class Oauth extends Component {
    static navigationOptions = {
        title: 'Oauth',
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text>개인정보 수집/이용 동의</Text>
                    <Text>내용보기</Text>
                    <CheckBox 
                        style={styles.checkboxStyle}
                        rightText={'전체 동의'} 
                        onClick={()=>{}}
                    />
                </View>
                <Button title='Next' onPress={() => this.props.navigation.navigate('PlatformSecond')} />
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

export default Oauth;