import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList, SectionList, ScrollView } from 'react-native';

import TransactionCard from './components/TransactionCard'

class TransactionHistory extends Component {
    static navigationOptions = {
        title: 'TransactionHistory',
    };

    render() {
        const { container, favorite, historyContainer, checkboxArea, favoriteItem, transactionList } = styles
        return (
            <View style={container}>
                <Text>TransactionHistory</Text>
                <FlatList 
                    style={favorite}
                    data={[
                        {key: '식비'}, 
                        {key: '교육비'}, 
                        {key: '생필품'}, 
                        {key: '비상금'}
                    ]}
                    renderItem={({item}) => 
                        <View>
                            <Text style={{ width: 200, height: 30, backgroundColor: 'powderblue' }}>{item.key}</Text>
                        </View>
                    }
                />
                <View style={historyContainer}>
                    <View style={checkboxArea}>
                        <Text>소비</Text>
                        <Text>소득</Text>
                        <Text>이체</Text>
                    </View>
                    <SectionList 
                        style={{ flexGrow: 0.7 }}
                        renderItem={({item, index, section}) => 
                            <Text 
                                style={{ borderWidth: 1, borderColor: '#ccc' }}
                                key={index}>
                                {item}
                            </Text>
                        }
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={{fontWeight: 'bold'}}>{title}</Text>
                        )}
                        sections={[
                            {
                                title: '화요일', 
                                data: ['item1', 'item2', 'item3', 'item4']
                            },
                            {
                                title: '수요일', 
                                data: ['item2', 'item3', 'item4', 'item5'],
                            }
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 48,
    },
    favorite: {
        flexGrow: 1,
        flexDirection: 'column',
        height: 200,
    },
    favoriteItem: {
    },
    histroyContainer: {
    },
    checkboxArea: {
        flexDirection: 'row'
    },
    transactionList: {
    }
})

export default TransactionHistory;