import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, SectionList, TouchableOpacity } from 'react-native';

class Budget extends Component {
    static navigationOptions = {
        title: '예산',
    };

    render() {
        const { container, current } = styles
        return (
            <View style={container}>
                <View style={current}>
                    <Text>가용금액</Text>
                    <Text>0,000,000원</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text>목표</Text>
                        <Text style={{ color: "blue", fontWeight: "500" }}>예산</Text>
                    </View>
                    <SectionList 
                        style={{ flexGrow: 0.7 }}
                        renderItem={({item, index, section}) => 
                            <View 
                                style={{ borderWidth: 1, borderColor: '#ccc', padding: 6, width: 300, justifyContent: 'space-around', flexDirection: 'row' }}
                                key={index}>
                                <Text>{item.subtitle}</Text>
                                <Text>{item.amount}</Text>
                            </View>
                        }
                        renderSectionHeader={({section: {title}}) => (
                            <View style={{ fontWeight: 'bold', width: 350, marginTop: 8, flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text>{title.titleText}</Text>
                                <Text>{title.titleAmount}</Text>
                            </View>
                        )}
                        sections={[
                            {
                                title: { titleText: '생활비', titleAmount: 600000 },
                                data: [
                                    { subtitle: '식비', amount: 600000 },
                                    { subtitle: '커피', amount: 600000 },
                                    { subtitle: '목욕', amount: 600000 },
                                ]
                            },
                            {
                                title: { titleText: '고정비', titleAmount: 300000 },
                                data: [
                                    { subtitle: '관리비', amount: 600000 },
                                    { subtitle: '구독표', amount: 600000 },
                                    { subtitle: '핸드폰비', amount: 600000 },
                                ]
                            }
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                    <TouchableOpacity>
                        <Text>카테고리 추가</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>예산 분배</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

class Goal extends Component {
    static navigationOptions = {
        title: 'Goal',
    };

    render() {
        const { container } = styles
        return (
            <View>
                <View style={current}>
                    <Text>가용금액</Text>
                    <Text>0,000,000원</Text>
                </View>
            </View>
        )
    }
};

class BudgetDetail extends Component {
    static navigationOptions = {
        title: 'BudgetDetail',
    };

    render() {
        return (
            <View>
                <View style={current}>
                    <Text>가용금액</Text>
                    <Text>0,000,000원</Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingTop: 32
    },
    current: {
        width: 300,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 8,
    }
})

export default Budget;