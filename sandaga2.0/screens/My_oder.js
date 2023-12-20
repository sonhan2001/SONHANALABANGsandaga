import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';

const calendar = require('../assets/imagess/calendar.png');
const notification = require('../assets/imagess/notifications.png')
const add = require('../assets/25.jpg')
const up = require('../assets/imagess/haut.png')
const crayon = require('../assets/imagess/edit.png')
const next = require('../assets/imagess/suivant.png')
const pp = require('../assets/imagess/pp.jpg')
const graphe = require('../assets/imagess/graphe (1).png')
const search = require('../assets/imagess/search.png')





const M_O= () => {
    const [text, setText] = useState('');


    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <view style={styles.header}>
                    <Image source={calendar} style={styles.calendar} />
                    <Image source={notification} style={styles.notification} />
                </view>
                <view style={{ display: 'flex', fontFamily: 'arial', fontSize: 22, margin: 8 }}> My</view>
                <view style={{ display: 'flex', fontFamily: 'arial', margin: 4, fontSize: 22, }}>Order</view>

                <view style={styles.monblock}>
                    <Image source={calendar} style={styles.monImage1} />
                    <view style={styles.X1}>1x</view>

                    <view style={styles.divNom} >
                        <text style={{ marginLeft: 9 }}>Orange</text>
                        <text style={{ fontSize: 10, marginLeft: 9 }} > $10</text>
                    </view>
                    <Image source={notification} style={styles.monImage2} />
                </view>
                <view style={styles.monblock}>
                    <Image source={calendar} style={styles.monImage1} />
                    <view style={styles.X1}>1x</view>

                    <view style={styles.divNom} >
                        <text style={{ marginLeft: 9 }}>Stawberry</text>
                        <text style={{ fontSize: 10, marginLeft: 9 }} > $12</text>
                    </view>
                    <Image source={notification} style={styles.monImage2} />
                </view>
                <view style={styles.monblock}>
                    <Image source={calendar} style={styles.monImage1} />
                    <view style={styles.X1}>1x</view>

                    <view style={styles.divNom} >
                        <text style={{ marginLeft: 9 }}>Green Apple</text>
                        <text style={{ fontSize: 10, marginLeft: 9 }} > $13</text>
                    </view>
                    <Image source={notification} style={styles.monImage2} />
                </view>
                <view style={styles.monblock}>
                    <Image source={calendar} style={styles.monImage1} />
                    <view style={styles.X1}>1x</view>

                    <view style={styles.divNom} >
                        <text style={{ marginLeft: 9 }}>Grape</text>
                        <text style={{ fontSize: 10, marginLeft: 9 }} > $15</text>
                    </view>
                    <Image source={notification} style={styles.monImage2} />
                </view>


                <view style={{ margin: 29,display:'flex',flexDirection:'row' }}>
                <text style={{ fontSize: 18,marginLeft: 9,fontFamily:'arial',fontWeight:'blod' }}>TotalPrice</text>
                <text style={{ fontSize: 22, marginLeft:150 }} > $50</text>
                
                </view>

                <view style={{
                        display: 'flex',
                        padding: '10px',
                        width: 200,
                        margin:50,
                        alignItems: 'center',
                        marginLeft: 60,
                        justifyContent: 'center',
                        backgroundColor: 'palevioletred',
                        borderRadius: 9,
                        borderWidth: 4,
                        borderColor: 'pink',
                        color: 'rgb(222, 197, 166)',
                        fontFamily: 'arial',
                    }} >Payment</view>





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
monblock:{display: 'flex', flexDirection: 'row',margin:20},
monImage1:{
    padding: '10px',
    width: 40,
    height: 40,
    marginLeft: 9,
    resizeMode: 'contain',
    backgroundColor: 'yellow',
    borderRadius: 9,
    // borderWidth: 4,
    // borderColor: 'palevioletred'
},
X1:{
    display: 'flex',
    width: 10,
    alignItems: 'center',
    marginLeft: 9,
},
divNom:{
    
        display: 'flex',

        width: 160,

        marginLeft: 9,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 9,
        borderWidth: 4,
        borderColor: 'pink',
        flexDirection: 'column',
        fontFamily: 'arial',
    
},
monImage2:{
    padding: '10px',
    width: 40,
    height: 40,
    marginLeft: 9,
    resizeMode: 'contain',
    backgroundColor: 'rgb(101, 99, 100)',
    borderRadius: 9,
    // borderWidth: 4,
    // borderColor: 'palevioletred',

}
});
 export default M_O;

