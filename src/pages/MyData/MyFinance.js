import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../../components/common'

class MyFinanace extends Component {
    static navigationOptions = {
        title: 'My금융',
    };

    onPressButton() {
        this.props.navigation.navigate('TransactionHistory')
    }

    render() {
        const { container, summary, date, dataList } = styles
        return (
            <View style={container}>
                <View style={summary}>
                    <Text>이번 주는 예산의 25%를 지출하셨습니다.</Text>
                    <Text style={date}>2018.12.22 - 2018.12.29</Text>
                    <Text>Status Bar location</Text>
                    <Text>예산 700,000원</Text>
                    <Text>지출 630,000원</Text>
                    <Button onPress={this.onPressButton.bind(this)}>
                        <Text>내 소비내역 보러가기</Text>
                    </Button>
                </View>
                <View style={dataList}>
                    <DataCard />
                </View>
                <View style={dataList}>
                    <DataCard />
                </View>
                <View style={dataList}>
                    <DataCard />
                </View>
            </View>
        )
    }
};

const DataCard = () => (
    <TouchableOpacity>
        <Text>순 자산</Text>
        <Text>300,000,000원</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    summary: {
        width: 300,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
    },
    date: {
        color: '#ccc',
        fontSize: 8,
        marginTop: 8,
    },
    dataList: {

    }
})

export default MyFinanace;