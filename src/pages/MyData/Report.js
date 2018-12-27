import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, SectionList } from 'react-native';

class Report extends Component {
    static navigationOptions = {
        title: 'Report',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 400 }}>
                    <Text>?</Text>
                    <Text>리포트 내려받기</Text>
                </View>
                <View style={{ height: 40, width: 400, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ccc', alignItems: 'center', justifyContent: 'center'}}>
                    <Text>거래내역 리포트</Text>
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
                                <Text>{title}</Text>
                            </View>
                        )}
                        sections={[
                            {
                                title: 'Title 1',
                                data: [
                                    { subtitle: '예산/비용', amount: 600000 },
                                    { subtitle: '자금증감', amount: 600000 },
                                    { subtitle: '자산변동', amount: 600000 },
                                ]
                            },
                            {
                                title: 'Title 2',
                                data: [
                                    { subtitle: '재무제표', amount: 600000 },
                                    { subtitle: '손익계산서(비용수익비교)', amount: 600000 },
                                    { subtitle: '분개장(항목의 아이템들)', amount: 600000 },
                                    { subtitle: '분개장(항목의 아이템들)', amount: 600000 },
                                    { subtitle: '분개장(항목의 아이템들)', amount: 600000 },
                                    { subtitle: '분개장(항목의 아이템들)', amount: 600000 },

                                ]
                            }
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingTop: 20
    }
})

export default Report;