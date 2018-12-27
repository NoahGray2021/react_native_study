import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { gray } from 'ansi-colors';

class ExpertDetail extends Component {ㄴ
    static navigationOptions = {
        title: 'ExpertDetail',
    };

    onButtonPress() {
        alert('견적 요청')
    }

    render() {
        const { container, profileArea, photo, practiceArea, practiceRow, requestBtn } = styles;

        return (
            <View style={container}>
                <View style={profileArea}>
                    <View style={photo}></View>
                    <Text>겨레겨레 세무사</Text>
                </View>
                <View style={practiceArea}>
                    <Text>절세 사례</Text>
                    <View>
                        <View style={practiceRow}>
                            <Text>000님</Text>
                            <Text>부동산 취득세 예상 세금보다 약 500만원 절세</Text>
                        </View>
                        <View style={practiceRow}>
                            <Text>000님</Text>
                            <Text>부동산 취득세 예상 세금보다 약 500만원 절세</Text>
                        </View>
                        <View style={practiceRow}>
                            <Text>000님</Text>
                            <Text>부동산 취득세 예상 세금보다 약 500만원 절세</Text>
                        </View>

                    </View>
                </View>
                <TouchableOpacity 
                    onPress={this.onButtonPress.bind(this)}
                    style={requestBtn}>
                    <Text>견적 받아보기</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
    },
    profileArea: {
        height: 180,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
    },
    photo: {
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 60,
        marginTop: 20,
        marginBottom: 20
    },
    practiceArea: {
        flexDirection: 'column',
        height: 180,
        marginBottom: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.4,
        padding: 20,
    },
    practiceRow: {
        flexDirection: 'row',
        padding: 5
    },
    requestBtn: {
        width: 60,
        height: 60,
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: 'orange'
    }
})

export default ExpertDetail;