import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class NiceToMeetYou extends Component {
    static navigationOptions = {
        title: 'NiceToMeetYouConfirm',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>안녕하세요, 000님</Text>
                <Text>MyD 가입을 환영합니다</Text>
                <Button title="서비스 둘러보기" onPress={() => this.props.navigation.navigate('')} />
                <Button title="마이데이터 관리하기" onPress={() => this.props.navigation.navigate('MyData')} />
                <Button title="부동산 체크리스트 확인하기" onPress={() => this.props.navigation.navigate('')} />
                <Button title="전문가 찾아보기" onPress={() => this.props.navigation.navigate('')} />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default NiceToMeetYou;