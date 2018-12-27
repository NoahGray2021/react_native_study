import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, SectionList, TouchableOpacity, TouchableHighlight } from 'react-native';

class Drive extends Component {
    static navigationOptions = {
        title: 'Drive',
    };

    render() {
        const { container } = styles
        return (
            <View style={container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20, width: 350 }}>
                    <Text>카테고리</Text>
                    <Text>검색</Text>
                    <Text>정렬</Text>
                    <Text>수정</Text>
                </View>
                <SectionList 
                        style={{ flexGrow: 0.7 }}
                        renderItem={({item, index, section}) => 
                            <TouchableOpacity 
                                style={{ borderBottomWidth: 1, borderColor: '#ccc', padding: 6, width: 300, justifyContent: 'space-around', flexDirection: 'row' }}
                                key={index}>
                                <Text>{item.subtitle}</Text>
                                <Text>{item.amount}</Text>
                            </TouchableOpacity>
                        }
                        renderSectionHeader={({section: {title}}) => (
                            <TouchableOpacity style={{ fontWeight: 'bold', width: 350, marginTop: 8, flexDirection: 'column' }}>
                                <Text style={{ fontWeight: "500" }}>{title.titleText}</Text>
                                <Text style={{ fontSize: 8, color: 'gray', marginBottom: 8 }}>{title.titleAmount}</Text>
                            </TouchableOpacity>
                        )}
                        sections={[
                            {
                                title: { titleText: '개인정보', titleAmount: '최종수정일: 2018년 12월 24일' },
                                data: [
                                    { subtitle: '주민등록등본.pdf', amount: 600000 },
                                    { subtitle: '건강보험득실확인서.hwp', amount: 600000 },
                                    { subtitle: '재직증명서.pdf', amount: 600000 },
                                ]
                            },
                            {
                                title: { titleText: '부동산', titleAmount: '최종수정일: 2018년 12월 24일' },
                                data: [
                                    { subtitle: '집문서', amount: 600000 },
                                    { subtitle: '땅문서', amount: 600000 },
                                    { subtitle: '땅문서2', amount: 600000 },
                                ]
                            },
                            {
                                title: { titleText: '세금', titleAmount: '최종수정일: 2018년 12월 24일' },
                                data: [
                                    { subtitle: '세금납부영수증', amount: 600000 },
                                    { subtitle: '수도세청구서', amount: 600000 },
                                    { subtitle: '전기세청구서', amount: 600000 },
                                ]
                            },
                            {
                                title: { titleText: '증빙', titleAmount: '최종수정일: 2018년 12월 24일' },
                                data: [
                                    { subtitle: '납부증빙1', amount: 600000 },
                                    { subtitle: '영수증1', amount: 600000 },
                                    { subtitle: '영수증2', amount: 600000 },
                                ]
                            }
                        ]}
                        keyExtractor={(item, index) => item + index}
                    />
                    <TouchableOpacity style={{ position: 'absolute', width: 50, height: 50, backgroundColor: "blue", right: 20, bottom: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                        <Text style={{ color: '#fff', fontSize: 40}}>+</Text>
                    </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingTop: 10,
    }
})

export default Drive;