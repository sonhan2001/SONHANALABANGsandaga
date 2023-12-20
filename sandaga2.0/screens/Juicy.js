import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';

const calendar = require('../assets/imagess/calendar.png');
const notification = require('../assets/imagess/notifications.png')
const add = require('../assets/images/orange.png')
const up = require('../assets/imagess/haut.png')
const crayon = require('../assets/imagess/edit.png')
const next = require('../assets/imagess/suivant.png')
const pp = require('../assets/imagess/pp.jpg')
const graphe = require('../assets/imagess/graphe (1).png')
const search = require('../assets/imagess/search.png')




const Juicy= () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <view style={styles.header}>
                    <Image source={calendar} style={styles.calendar} />
                    <text style={{ fontWeight: 'blod', fontFamily: 'arial', fontSize: 18 }}> Product Detail</text>
                    <Image source={notification} style={styles.notification} />
                </view>
                <view style={{ display: 'flex', fontFamily: 'arial', marginVertical: '290px', fontSize: 22, margin: 8 }}> Juicy Orange</view>
                <view style={{ display: 'flex', fontFamily: 'arial', margin: 10, fontSize: 10, color: 'palevioletred', fontWeight: ' bold' }}> Swett and Juicy</view>
                <view style={{ display: 'flex', fontFamily: 'arial', marginVertical: '290px', fontSize: 10, margin: 16, fontWeight: ' bold' }}> Lorem ipsum is simply dummy text of the printing typesetting industry .Lorem ipsum has been the industry's dummy text ever since the 123 when on unknown pinter took a gally of type arcan.</view>
                <view style={{ display: 'flex', flexDirection: 'row' }}>
                    <Image source={calendar} style={{
                        padding: '10px',
                        width: 55,
                        height: 50,
                        marginLeft: 9,
                        resizeMode: 'contain',

                        borderRadius: 9,
                        borderWidth: 4,
                        borderColor: 'palevioletred',

                    }} />

                    <view style={{
                        display: 'flex',
                        padding: '10px',
                        width: 200,
                        alignItems: 'center',
                        marginLeft: 9,
                        justifyContent: 'center',
                        backgroundColor: 'palevioletred',
                        borderRadius: 9,
                        borderWidth: 4,
                        borderColor: 'pink',
                        color: 'rgb(222, 197, 166)',
                        fontFamily: 'arial',
                    }} >Find Nearest Store</view>

                </view>



                <Image source={add} style={{

                    width: '150px',
                    height: '150px',
                    marginLeft: '89px',
                    marginVertical: 30,
                    borderRadius: '50%',

                }} />

                <view style={{ margin: -110, display: 'flex', marginLeft: 0, flexDirection: 'column', backgroundColor: 'white', width: 336, height: '300px', borderRadius: 30, marginLeft: -9 }}>
                    <view style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{ margin: 120, width: 300, marginLeft: 9 }}>Nutrition Facs</Text>
                        <Text style={{ color: 'rgb(101, 99, 100)',marginTop:-100 }}>  Fiber   3g                                                     7%</Text>

                    </view>

                    <view style={{ display: 'flex', flexDirection: 'row' }}>
                        <view style={{ marginLeft: 9, width: 120, height: 4, backgroundColor: 'palevioletred', borderRadius: 50 }} ></view>
                        <view style={{ marginLeft: -5, width: 200, height: 4, backgroundColor: 'rgb(101, 99, 100)' }} ></view>
                    </view>
                    <Text style={{ margin: 9, color: 'rgb(101, 99, 100)' }}>Good sugar  12g                                         5%</Text>
                    <view style={{ display: 'flex', flexDirection: 'row' }}>
                        <view style={{ marginLeft: 9, width: 200, height: 4, backgroundColor: 'palevioletred', borderRadius: 50 }} ></view>
                        <view style={{ marginLeft: -5, width: 120, height: 4, backgroundColor: 'rgb(101, 99, 100)' }} ></view>
                    </view>
                </view>




            </view>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgb(92, 93, 92)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    app: {
        width: 320,
        height: 560,
        borderRadius: 30,

        // marginTop: 20,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'rgb(222, 197, 166)',
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    header: {
        // backgroundColor: '#fff',
        width: 'auto',
        height: '6%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'center',
    },
    calendar: {
        marginTop: '0%',
        padding: '10px',
        width: '10%',
        height: '50%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',

    },
    notification: {
        marginTop: '0%',
        padding: '10px',
        width: '10%',
        height: '50%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',

    },



});

export default Juicy;