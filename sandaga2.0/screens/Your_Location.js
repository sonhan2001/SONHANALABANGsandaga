import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';


const pp = require('../assets/imagess/pp.jpg')
const vege = require('../assets/choux2.jpg');
const dairi = require('../assets/lait2.jpg')
const meat = require('../assets/viande.jpg')
const fish = require('../assets/pois.jpg')
const pan = require('../assets/panier.jpg')
const betera = require('../assets/beterave.jpg')
const next = require('../assets/imagess/suivant.png')
const broco = require('../assets/brocoli.jpg')
const sacvert = require('../assets/plastic.jpg')
const search = require('../assets/imagess/search.png')
const truc = require('../assets/imagess/calendar.png');
const coeur = require('../assets/coeur.jpg')
const cV = require('../assets/cVert.jpg')
const aV = require('../assets/aVert.jpg')
const dernierSlides = [
    {
        type: 'view',
        content: (
            <View style={{

                marginTop: '10px',
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 20,
                padding: '5%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '20px',
            }}>

                <view style={{ display: 'flex', flexDirection: 'column', height: 130, width: 100, margin: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10 }}>
                    <Image source={coeur} style={{ width: 10, height: 10, marginLeft: '70%', borderRadius: 11 }} />
                    <Image source={betera} style={{ width: 60, height: 45, margin: 2, borderRadius: 11 }} />
                    <view style={{ margin: 9, width: 75, height: 1, backgroundColor: 'white' }}></view>
                    <view style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 10 }}>Bitroot</text>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 7, opacity: '75%' }}>$1.25</text>
                        </view>

                        <Image source={cV} style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </view>
                </view>
                {/* block */}
                <view style={{ display: 'flex', flexDirection: 'column', height: 130, width: 100, margin: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginLeft: -70 }}>
                    <Image source={coeur} style={{ width: 10, height: 10, marginLeft: '70%', borderRadius: 11 }} />
                    <Image source={betera} style={{ width: 60, height: 45, margin: 2, borderRadius: 11 }} />
                    <view style={{ margin: 9, width: 75, height: 1, backgroundColor: 'white' }}></view>
                    <view style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 10 }}>Bitroot</text>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 7, opacity: '75%' }}>$1.25</text>
                        </view>

                        <Image source={cV} style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </view>
                </view>
                {/* block */}
                <view style={{ display: 'flex', flexDirection: 'column', height: 130, width: 100, margin: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginLeft: -70 }}>
                    <Image source={coeur} style={{ width: 10, height: 10, marginLeft: '70%', borderRadius: 11 }} />
                    <Image source={betera} style={{ width: 60, height: 45, margin: 2, borderRadius: 11 }} />
                    <view style={{ margin: 9, width: 75, height: 1, backgroundColor: 'white' }}></view>
                    <view style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 10 }}>Bitroot</text>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 7, opacity: '75%' }}>$1.25</text>
                        </view>

                        <Image source={cV} style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </view>
                </view>
                {/* block */}
                <view style={{ display: 'flex', flexDirection: 'column', height: 130, width: 100, margin: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginLeft: -70 }}>
                    <Image source={coeur} style={{ width: 10, height: 10, marginLeft: '70%', borderRadius: 11 }} />
                    <Image source={betera} style={{ width: 60, height: 45, margin: 2, borderRadius: 11 }} />
                    <view style={{ margin: 9, width: 75, height: 1, backgroundColor: 'white' }}></view>
                    <view style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 10 }}>Bitroot</text>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 7, opacity: '75%' }}>$1.25</text>
                        </view>

                        <Image source={cV} style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </view>
                </view>
                {/* block */}
                <view style={{ display: 'flex', flexDirection: 'column', height: 130, width: 100, margin: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginLeft: -70 }}>
                    <Image source={coeur} style={{ width: 10, height: 10, marginLeft: '70%', borderRadius: 11 }} />
                    <Image source={betera} style={{ width: 60, height: 45, margin: 2, borderRadius: 11 }} />
                    <view style={{ margin: 9, width: 75, height: 1, backgroundColor: 'white' }}></view>
                    <view style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 10 }}>Bitroot</text>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 7, opacity: '75%' }}>$1.25</text>
                        </view>

                        <Image source={cV} style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </view>
                </view>
                {/* block */}
                <view style={{ display: 'flex', flexDirection: 'column', height: 130, width: 100, margin: 90, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, marginLeft: -70 }}>
                    <Image source={coeur} style={{ width: 10, height: 10, marginLeft: '70%', borderRadius: 11 }} />
                    <Image source={betera} style={{ width: 60, height: 45, margin: 2, borderRadius: 11 }} />
                    <view style={{ margin: 9, width: 75, height: 1, backgroundColor: 'white' }}></view>
                    <view style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <view style={{ display: 'flex', flexDirection: 'column' }}>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 10 }}>Bitroot</text>
                            <text style={{ fontWeight: 'blod', fontFamily: 'cambri', fontSize: 7, opacity: '75%' }}>$1.25</text>
                        </view>

                        <Image source={cV} style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </view>
                </view>
                {/* block */}

            </View>
        ),
    },
];
const slides = [
    {
        type: 'view',
        content: (
            <View style={{
                marginTop: '10px',
                height: 10,
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 20,
                padding: '5%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '20px',

            }}>

                <view style={{ display: 'flex', flexDirection: 'column', height: 70, width: 70, margin: 9, justifyContent: 'center', alignItems: 'center', }}>
                    <Image source={vege} style={{ width: '120%', height: '80%', margin: 2 }} />
                    <text style={{ fontWeight: 'blod', fontFamily: 'arial', fontSize: 10 }}>Vegetables</text>
                </view>

                <view style={{ display: 'flex', flexDirection: 'column', height: 70, width: 70, margin: 9, justifyContent: 'center', alignItems: 'center', marginLeft: 30, }}>
                    <Image source={dairi} style={{ width: '200%', height: '80%', margin: 2 }} />
                    <text style={{ fontWeight: 'blod', fontFamily: 'arial', fontSize: 10 }}>Dairies</text>
                </view>

                <view style={{ display: 'flex', flexDirection: 'column', height: 70, width: 70, margin: 9, justifyContent: 'center', alignItems: 'center', marginLeft: 40 }}>
                    <Image source={meat} style={{ width: '160%', height: '80%', margin: 2 }} />
                    <text style={{ fontWeight: 'blod', fontFamily: 'arial', fontSize: 10 }}>Meats</text>
                </view>

                <view style={{ display: 'flex', flexDirection: 'column', height: 70, width: 70, margin: 9, justifyContent: 'center', alignItems: 'center', marginLeft: 40 }}>
                    <Image source={fish} style={{ width: '190%', height: '80%', margin: 2 }} />
                    <text style={{ fontWeight: 'blod', fontFamily: 'arial', fontSize: 10 }}>Fish</text>
                </view>

                <view style={{ display: 'flex', flexDirection: 'column', height: 70, width: 70, margin: 9, justifyContent: 'center', alignItems: 'center', marginLeft: 30 }}>
                    <Image source={broco} style={{ width: '100%', height: '80%', margin: 2 }} />
                    <text style={{ fontWeight: 'blod', fontFamily: 'arial', fontSize: 10 }}>Broccoli</text>
                </view>

            </View >



        ),
    },
];


const form1= () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <Text style={styles.text1}>Your Location</Text>
                <view style={styles.header}>
                    <Text style={styles.text2}>3892 Olen Thomas Drive, NY</Text>
                    <Image source={pp} style={{
                        width: 25,
                        height: 25,
                        borderRadius: '50%',
                    }} />
                </view>

                <view style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 20, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff', color: 'gray', fontSize: 11 }}
                        // onChangeText={text => setText(text)}
                        // value={text}
                        placeholder="Search foods ,groceries"
                    />
                    <Image source={search} style={{ width: 24, height: 24, margin: -40, left: 45, opacity: '50%' }} />
                    <Image source={aV} style={{ width: 50, height: 43, backgroundColor: 'rgb(33, 149, 87)', left: 260, borderRadius: 50, margin: 4 }} />
                </view>
                <view style={{ display: 'flex', justifyContent: 'space-between', margin: 12 }}>
                    <Text style={styles.text2}>Categories</Text>
                    <Text style={{ fontSize: 11, color: 'green' }}>See all</Text>
                </view>

                {/* 
                <view style={styles.fistScroll}>
                    <Image source={vege} style={styles.imageScroll1} />
                    <text style={styles.textScrool1}>Vegetables</text>
                </view> */}

                <view style={{ marginTop: 10, width: 320, height: 100, }}>


                    <StatusBar style="auto" />
                    <ScrollView horizontal={true}>
                        {slides.map((slide, index) => (
                            <View key={index} style={{ width: '90%', height: 100, }}>
                                {slide.type === 'view' && slide.content}
                            </View>
                        ))}
                    </ScrollView>
                </view>
                <view style={{ height: 10, margin: 20 }}></view>
                <view style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={styles.text2}>Deals</Text>
                    <Text style={{ fontSize: 11, color: 'green' }}>See all</Text>
                </view>
                <view style={styles.lemilieu}>

                    <View style={{}}>

                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>50% OFF</Text>
                        <Text style={{ fontSize: 10, opacity: '50%', fontWeight: 'bold' }}>On Grocevy Combo packs</Text>
                        <view style={{ fontSize: 11, fontWeight: 'bold', fontFamily: 'arial', backgroundColor: 'white', alignItems: 'center', display: 'flex', justifyContent: 'center', height: 19, borderRadius: 7, color: 'green', margin: 9 }}>Shop now</view>

                    </View>
                    <Image source={pan} style={{ width: 100, height: 90 }} />
                </view>
                <view style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text style={styles.text2}>Popular items</Text>
                    <Text style={{ fontSize: 11, color: 'green' }}>See all</Text>
                </view>
                <view style={{ marginTop: 10, width: 320, height: 100, }}>


                    <StatusBar style="auto" />
                    <ScrollView horizontal={true}>
                        {dernierSlides.map((slide, index) => (
                            <View key={index} style={{ width: '80%', height: 100, margin: 60, marginLeft: -100 }}>
                                {slide.type === 'view' && slide.content}
                            </View>
                        ))}
                    </ScrollView>
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
        height: 700,
        borderRadius: 30,

        marginTop: 10,
        // marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'rgb(231, 233, 231)',
        paddingLeft: '2%',
        paddingRight: '2%',
        display: 'flex',
        flexDirection: 'column',
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

    text1: {
        fontSize: 11,
        opacity: '50%',
    },
    text2: {
        fontFamily: 'Calibri',
        fontWeight: 'bold',
    },
    fistScroll: {
        display: 'flex',
        flexDirection: 'column',
        height: 70,
        width: 70,
        margin: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageScroll1: { width: '80%', height: '80%', margin: 2 },
    textScrool1: { fontWeight: 'blod', fontFamily: 'arial', fontSize: 10 },
    blocc11: {

    },
    lemilieu: {
        display: 'flex',
        backgroundColor: 'rgb(203, 241, 241)',
        height: 114,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 12,
    }
});

export default form1;