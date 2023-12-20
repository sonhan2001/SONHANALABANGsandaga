import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button,TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';

const calendar = require('../assets/image/calendar.png');
const notification = require('../assets/imagess/notifications.png')
const add = require('../assets/25.jpg')
const up = require('../assets/imagess/haut.png')
const crayon = require('../assets/imagess/edit.png')
const next = require('../assets/imagess/suivant.png')
const pp = require('../assets/imagess/pp.jpg')
const graphe = require('../assets/imagess/graphe (1).png')
const search = require('../assets/panier2.jpg')




const O_G= () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <view style={styles.header}>
                    <Image source={search} style={{
                        marginTop:-20,
                        width:347 ,
                        height: '350px',
                        marginLeft:-13,
                 
                        borderRadius: 30,

                    }} />
                </view>
                <View style={{backgroundColor:'rgb(231, 233, 231)',width:347 ,
                        height: '276px',borderRadius: 30,margin:250,marginLeft:-13,display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <text style={styles.mesText}>Order Groceries</text>
                            <text style={styles.mesText}>and Get deliverred</text>
                            <text style={styles.mesText}>in few minutes</text>
                            <View style={styles.monButton}><text style={styles.mesText}>Get started</text></View>                       
                </View>
                

            </view>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    app: {
        width: 320,
        height: 540,
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
        backgroundColor: 'black',
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

mesText:{
    fontWeight:'bold',
    fontFamily:'arial',
    fontSize:19,
},
monButton:{
    display:'flex',
    margin:40,
    height:40,
    width:150,
    borderWidth:2,
    borderColor:'green',
    color:'green',
    borderRadius:12,
    fontWeight:'blod',
    fontFamily:'19px',
    alignItems:'center',
    justifyContent:'center',
   
},
});

export default O_G;