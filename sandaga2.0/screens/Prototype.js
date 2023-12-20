import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';

const calendar = require('../assets/imagess/calendar.png');
const notification = require('../assets/imagess/notifications.png')
const add = require('../assets/imagess/add.png')
const up = require('../assets/imagess/haut.png')
const crayon = require('../assets/imagess/edit.png')
const next = require('../assets/imagess/suivant.png')
const pp = require('../assets/imagess/pp.jpg')
const graphe = require('../assets/imagess/graphe (1).png')
const search = require('../assets/imagess/search.png')

const slides = [
    {
        type: 'view',
        content: (
            <View style={{
                backgroundColor: '#90ee90',
                width: 200,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 20,
                padding: '5%',
                // justifyContent: 'space-around',
                //  alignItems: 'center',
            }}>
                <Image source={crayon} style={{

                    // margin: '5%',
                    width: '15%',
                    height: '15%',
                    resizeMode: 'contain',
                    alignContent: 'center',
                    backgroundColor: 'rgb(42, 144, 78)',
                    borderRadius: 60,
                    borderWidth: 5,
                    borderColor: '#fff',
                }} />
                <Text style={{
                    marginTop: '40px',
                    fontFamily: 'arial',
                    fontSize: '15px',
                    fontWeight: 'bold',
                }}>Write Presciption</Text>
                <Text style={{
                    marginTop: '3px',
                    fontFamily: 'arial',
                    fontSize: '10px',
                    fontWeight: 'bold',
                }}>to Patient</Text>
                <view style={{
                    marginTop: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{
                        marginTop: '3px',
                        paddingTop: '3px',
                        fontFamily: 'arial',
                        fontSize: '10px',
                        fontWeight: 'bold',
                    }}>Template</Text>
                    <Image source={next} style={{
                        width: '15%',
                        height: '27px',
                        resizeMode: 'contain',
                        alignContent: 'center',
                        backgroundColor: 'rgb(42, 144, 78)',
                        borderRadius: 60,
                        borderWidth: 5,
                        borderColor: '#fff',
                    }} />
                </view>
            </View>
        ),
    },
    {
        type: 'view',
        content: (
            <View style={{
                backgroundColor: '#5472AE',
                width: 200,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 20,
                padding: '5%',
                // justifyContent: 'space-around',
                //  alignItems: 'center',
            }}>
                <Image source={pp} style={{

                    // margin: '5%',
                    width: '15%',
                    height: '15%',
                    resizeMode: 'contain',
                    alignContent: 'center',
                    backgroundColor: '#fff',
                    borderRadius: 60,
                    borderWidth: 1,
                    borderColor: '#fff',
                }} />
                <Text style={{
                    marginTop: '40px',
                    fontFamily: 'arial',
                    fontSize: '15px',
                    fontWeight: 'bold',
                }}>NEPTURNE DE MANGA</Text>
                <Text style={{
                    marginTop: '3px',
                    fontFamily: 'arial',
                    fontSize: '10px',
                    fontWeight: 'bold',
                }}>Jordan</Text>
                <view style={{
                    marginTop: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{
                        marginTop: '3px',
                        paddingTop: '3px',
                        
                        fontFamily: 'arial',
                        fontSize: '10px',
                        fontWeight: 'bold',
                    }}>Template</Text>
                    <Image source={next} style={{
                        width: '15%',
                        height: '27px',
                        resizeMode: 'contain',
                        alignContent: 'center',
                        backgroundColor: '#fff',
                        borderRadius: 60,
                        borderWidth: 5,
                        borderColor: '#fff',
                    }} />
                </view>
            </View>
        ),
    },
];



const data = {
    // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
            strokeWidth: 2,
        },
        {
            data: [35, 52, 68, 51, 72, 89],
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
            strokeWidth: 2,
        },
    ],
};

const chartConfig = {
    withInnerLines: false,
    backgroundGradientFromOpacity: 0,
    backgroundGradientFromOpacity: 0, // arrière-plan transparent
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
};


const Proto= () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <view style={styles.header}>
                    <Image source={calendar} style={styles.calendar} />
                    <Image source={notification} style={styles.notification} />
                </view>
                <view style={styles.sousHeader}>
                    <view style={styles.sousHeaderLeft}>
                        <view style={styles.sousHeaderSousLeft}>
                            <text style={styles.Texte12}>12</text>
                            <view style={styles.ViewToday}>
                                <Image source={up} style={styles.up} />
                                <text style={styles.Texte6}>2%</text>
                                <text style={styles.TexteToday}>today</text>
                            </view>
                        </view>
                        <text style={styles.Textepacient}>Patient appointments</text>
                    </view>
                    <view style={styles.sousHeaderRight}>
                        <Image source={add} style={styles.add} />
                    </view>
                </view>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
                        // onChangeText={text => setText(text)}
                        // value={text}
                        placeholder="Search"
                    />
                    <Image  source={search} style={{ width: 24, height: 24, margin: 5, position: 'absolute', left: 5 }} />
                </View>

                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {slides.map((slide, index) => (
                        <View key={index} style={{ width: '65%', height: 200, }}>
                            {slide.type === 'view' && slide.content}
                        </View>
                    ))}
                </ScrollView>
                <view style={styles.avantGraphe}>
                    <view style={styles.sousHeaderLeft}>
                        <view style={styles.sousHeaderSousLeft}>
                            <text style={styles.Texte12}>12</text>
                            <view style={styles.petitTestAvantGraphe}>
                                <Image source={up} style={styles.up} />
                                <text style={styles.Texte6}>11%</text>
                                <text style={styles.TexteToday}>week</text>
                            </view>
                        </view>
                        <text style={styles.textAvantGraphe}>New patients</text>
                    </view>
                    <view style={styles.sousHeaderLeft}>
                        <view style={styles.sousHeaderSousLeft}>
                            <text style={styles.Texte12}>24</text>
                            <view style={styles.petitTestAvantGraphe24}>
                                <Image source={graphe} style={styles.up} />
                                <Image source={graphe} style={styles.up} />
                                <Image source={graphe} style={styles.up} />
                                {/* <text style={styles.Texte6}>11%</text>
                                <text style={styles.TexteToday}>week</text> */}
                            </view>
                        </view>
                        <text style={styles.textAvantGraphe}>Insurance patient</text>
                    </view>
                </view>
                <View style={styles.graphe} >
                    <LineChart
                        data={data}
                        width={350}
                        height={160}
                        chartConfig={chartConfig}
                    />
                </View>
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
        height: 500,
        borderRadius: 30,
        flex: 1,
        // marginTop: 20,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#D3D3D3',
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
    sousHeader: {
        // backgroundColor: 'red',
        width: 'auto',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sousHeaderLeft: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    Texte12: {
        fontFamily: 'arial',
        fontSize: '35px',
        fontWeight: 'bold',
    },
    add: {
        marginTop: '2%',
        marginRight: '5%',
        padding: '10px',
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    ViewToday: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '35%',
        height: '30%',
        resizeMode: 'contain',
        alignContent: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },
    up: {
        marginTop: '2%',
        marginRight: '5%',
        marginBottom: '2%',
        // marginTop: '5px',
        padding: '8px',
        // paddingTop: '10px',
        width: '10%',
        height: '25%',
        resizeMode: 'contain',
        // backgroundColor: '#D3D3D3',
        // borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },
    Texte6: {
        marginTop: '3px',
        fontFamily: 'arial',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    TexteToday: {
        marginTop: '3px',
        paddingLeft: '2px',
        color: '#5A595D',
        fontFamily: 'arial',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    sousHeaderSousLeft: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    Textepacient: {
        marginTop: '-13px',
        fontFamily: 'arial',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    sousHeaderRight: {
        marginTop: '1%',
        marginRight: '2%',
        // backgroundColor: 'gree',
        width: '16%',
        height: '87%',
        resizeMode: 'contain',
        alignContent: 'center',
        borderWidth: 5,
        borderColor: '#fff',
        // backgroundColor: '#000',
    },
    avantGraphe: {
        width: '100%',
        height: '15%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },
    textAvantGraphe: {
        marginTop: '-30px',
        fontFamily: 'Calibri',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    petitTestAvantGraphe: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '60%',
        height: '22%',
        resizeMode: 'contain',
        alignContent: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        borderRadius: 50,
        // borderWidth: 5,
        // borderColor: '#fff',
    },
    petitTestAvantGraphe24: {
        marginLeft: '10px',
        marginTop: '20px',
        width: '46%',
        height: '22%',
        resizeMode: 'contain',
        alignContent: 'center',
         backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        borderRadius: 50,
     
    },
    graphe: {
     backgroundColor: '#fff',
        width: 'auto',
        // height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  alignItems: 'center',
    }

});

export default Proto;