import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';

const calendar = require('../assets/imagess/calendar.png');
const notification = require('../assets/imagess/notifications.png')
const add = require('../assets/imagess/add.png')
const oran = require('../assets/images/orange.png')
const res = require('../assets/images/raisain.png')
const crayon = require('../assets/imagess/edit.png')
const next = require('../assets/imagess/suivant.png')
const pp = require('../assets/imagess/pp.jpg')
const graphe = require('../assets/imagess/graphe (1).png')
const search = require('../assets/imagess/search.png')
const coeur=require( '../assets/coeur.jpg')

const dernierSlides = [
    {
        type: 'view',
        content: (
            <View style={{

                height: 0,
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'space-around',
                alignItems: 'center',


            }}>




                <View style={{
                    height: '60px',
                    width: 200,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 12,
                    borderhei:5,
                    border: 'solid',
                    borderColor: 'rgb(253, 223, 228)',
                    marginHorizontal: '5px',
                    flexDirection: 'row',
                    marginLeft: 250,
                    marginTop: -90,
                }}
                >
                    <Image source={next} style={{
                        marginLeft: 9,
                        width: '50px',
                        height: '40px',
                        resizeMode: 'contain',
                        alignContent: 'center',
                        backgroundColor: 'pink',
                        borderRadius: 9,


                    }} />
                    <view style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>Xenter Shop</Text>

                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>2356 Toltrican Street</Text>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>9A.M _7 P.M</Text>
                    </view>


                </View>



                <View style={{
                    height: '60px',
                    width: 200,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 12,
                    borderWidth: -2,
                    border: 'solid',
                    borderColor: 'rgb(253, 223, 228)',
                    marginHorizontal: '5px',
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: -90,
                }}
                >
                    <Image source={next} style={{
                        marginLeft: 9,
                        width: '50px',
                        height: '40px',
                        resizeMode: 'contain',
                        alignContent: 'center',
                        backgroundColor: 'pink',
                        borderRadius: 9,


                    }} />
                    <view style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>Xenter Shop</Text>

                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>2356 Toltrican Street</Text>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>9A.M _7 P.M</Text>
                    </view>


                </View>

                <View style={{
                    height: '60px',
                    width: 200,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 12,
                    borderWidth: 2,
                    border: 'solid',
                    borderColor: 'rgb(253, 223, 228)',
                    marginHorizontal: '5px',
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: -90,
                }}
                >
                    <Image source={next} style={{
                        marginLeft: 9,
                        width: '50px',
                        height: '40px',
                        resizeMode: 'contain',
                        alignContent: 'center',
                        backgroundColor: 'pink',
                        borderRadius: 9,


                    }} />
                    <view style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>Xenter Shop</Text>

                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>2356 Toltrican Street</Text>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>9A.M _7 P.M</Text>
                    </view>


                </View>

                <View style={{
                    height: '60px',
                    width: 200,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 12,
                    borderWidth: 2,
                    border: 'solid',
                    borderColor: 'pink',
                    marginHorizontal: '5px',
                    flexDirection: 'row',
                    marginLeft: 10,
                    marginTop: -90,
                }}
                >
                    <Image source={next} style={{
                        marginLeft: 9,
                        width: '50px',
                        height: '40px',
                        resizeMode: 'contain',
                        alignContent: 'center',
                        backgroundColor: 'pink',
                        borderRadius: 9,


                    }} />
                    <view style={{ display: 'flex', flexDirection: 'column' }}>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>Xenter Shop</Text>

                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>2356 Toltrican Street</Text>
                        <Text style={{
                            marginLeft: 9,
                            paddingTop: '3px',
                            fontFamily: 'arial',
                            fontSize: '10px',
                            fontWeight: 'bold',
                        }}>9A.M _7 P.M</Text>
                    </view>


                </View>

            </View>
        ),
    },
];
const slidess = [
    {
        type: 'view',
        content: (
            <View style={{
                marginTop: '60px',
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 20,
                padding: '5%',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginLeft: '150px',
            }}>
                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'yellow',
                    marginHorizontal: '5px',

                }}
                > Orange</View>

                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Grape</View>

                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Tommate</View>



                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Haricot</View>
                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Conconbre</View>
                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Choux</View>
                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Mangue</View>
                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Epices</View>
                <View style={{
                    height: 30,
                    width: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '30px',
                    backgroundColor: 'white',
                    marginHorizontal: '5px',

                }}
                > Orange</View>

            </View>



        ),
    },
];


const slides = [
    {
        type: 'view',
        content: (
            <View style={{
                backgroundColor: 'rgb(249, 222, 172)',
                width: 200,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 20,
                padding: '5%',
                // justifyContent: 'space-around',
                //  alignItems: 'center',
            }}>

                <Image source={oran} style={{

                    // margin: '5%',
                    width: '60%',
                    height: '60%',
                    marginHorizontal: 'auto',
                    borderRadius: 60,
                }} />

                <Image source={coeur} style={{

                    marginTop: -100,
                    width: '20%',
                    height: '20%',
                    marginHorizontal: '140px',
                    borderRadius: 60,

                }} />
                <Text style={{
                    marginTop: '60px',
                    fontFamily: 'arial',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    marginBottom: '40px',

                }}>Orange                       $10</Text>


                <view style={{
                    marginTop: -30,
                    marginLeft: '30%',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'orange',
                    height: 20,
                    width: 80,
                    borderRadius: 20

                }}
                > <Text color='white'>ADD</Text></view>
            </View>
        ),
    },
    {
        type: 'view',
        content: (
            <View style={{
                backgroundColor: 'rgb(149, 145, 212)',
                width: 200,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 20,
                padding: '5%',
                // justifyContent: 'space-around',
                //  alignItems: 'center',
            }}>
                <Image source={res} style={{

                    // margin: '5%',
                    width: '60%',
                    height: '60%',
                    marginHorizontal: 'auto',
                }} />

                <Image source={coeur} style={{

                    marginTop: -100,
                    width: '20%',
                    height: '20%',
                    marginHorizontal: '140px',
                    borderRadius: 60,

                }} />
                <Text style={{
                    marginTop: '60px',
                    fontFamily: 'arial',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    marginBottom: '40px',

                }}>Raisain                      $10</Text>


                <view style={{
                    marginTop: -30,
                    marginLeft: '30%',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(74, 62, 249)',
                    height: 20,
                    width: 80,
                    borderRadius: 20

                }}
                > <Text color='white'>ADD</Text></view>
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

const homeS = () => {
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
                            <text style={styles.Texte12}>Discover seasonal</text>

                        </view>
                        <text style={styles.Texte12}>Fruit and vegetable</text>
                    </view>

                </view>

                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {slidess.map((slide, index) => (
                        <View key={index} style={{ width: '65%', height: 100, }}>
                            {slide.type === 'view' && slide.content}
                        </View>
                    ))}
                </ScrollView>

                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {slides.map((slide, index) => (
                        <View key={index} style={{ width: '55%', height: 200, marginVertical: 30 }}>
                            {slide.type === 'view' && slide.content}
                        </View>
                    ))}
                </ScrollView>
                <view style={styles.avantGraphe}>
                    <view style={styles.sousHeaderLeft}>
                        <text style={{ fontWeight: 'bold', marginVertical: 200 }}>Nearby Shop</text>
                        <StatusBar style="auto" />
                        <ScrollView horizontal={true}>
                            {dernierSlides.map((slide, index) => (
                                <View key={index} style={{ width: '55%', height: 50, marginVertical: 90 }}>
                                    {slide.type === 'view' && slide.content}
                                </View>
                            ))}
                        </ScrollView>
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
        height: 100,
        borderRadius: 30,
        flex: 1,
        // marginTop: 20,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        paddingLeft: '2%',
        paddingRight: '2%',
    },
    header: {
        // backgroundColor: '#fff',
        width: 'auto',
        height: '4%',
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
        fontSize: '20px',
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
        width: '120%',
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


});

export default homeS;