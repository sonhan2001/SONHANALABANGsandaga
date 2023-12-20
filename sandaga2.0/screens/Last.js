import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React, { useState } from 'react';


const broco = require('../assets/brocoli2.jpg')
const carrot = require('../assets/carot.jpg');
const cV = require('../assets/cVert.jpg')


const LastS= () => {
    const [text, setText] = useState('');


    return (
        <View style={styles.body}>
            <view style={styles.app}>
                <Image source={broco} style={{ width: 300, height: 260, borderRadius: 9 ,marginLeft:9}} />
                <view style={styles.block1}>Vegetables</view>
                <view style={styles.block2}>
                    <view style={styles.binome}>
                        <Text style={styles.binome1}>Broccoli</Text>
                        <Text style={styles.binome2}>approx 100gm</Text>
                    </view>
                    <view style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flex:0.3}}>
                        <View style={styles.faux}>-</View>
                        <Text style={{fontWeight:'bold'}}>1</Text>
                        <View style={styles.faux}>+</View>
                    </view>
                </view>
                <view style={styles.lignes}></view>
                <view style={styles.block3}>
                    <Image source={carrot} style={{ width: 50, height: 50, borderRadius: 11 }} />
                    <view style={styles.binome}>
                        <Text style={styles.binome1}>Agrifarm Inc</Text>
                        <Text style={styles.binome2}>F5RJ+FJF, Chairtakol</Text>
                    </view>
                    <Text style={styles.binome2}>4,9 (89)</Text>
                </view>
                <view style={styles.lignes}></view>
                <view style={styles.binome}>
                    <Text style={styles.binome1}>Description</Text>
                    <Text style={styles.binome2}>brocoli is jsf sf  d sf  fdfsfdfs fsdrz uku j jghgfh ggssfs wxwfwwfffdgxcx xvxvfddvfdfv cf <text style={{}}>...Read more</text></Text>
                </view>
                <view style={styles.block2}>
                <Image source={cV} style={{ width: 50, height: 50, borderRadius: 11 }} />
                    <view style={styles.faux2}> Add to cart $1.50</view>
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
        justifyContent:'space-between',
        
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

    block1: {
        display: 'flex',
        border: 'solid',
        borderWidth: 2,
        borderColor: 'rgb(129, 226, 178)',
        borderRadius: 4,
        justifyContent:'center',
        color: 'rgb(129, 226, 178)',
        alignItems: 'center',
        margin: 9,
        fontSize: 12,
        height: 19,
        width:90,
    },
    binome:{
        display:'flex',
        flexDirection:'column'
    },
    block2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    binome1:{
        fontFamily:'arial',
        fontWeight:'bold',
    },
    binome2:{
        fontFamily:'arial',
        fontSize:11,
        fontWeight:'bold',
        opacity:'50%',
    },
    lignes:{
        display:'flex',
        height:1,
        width:'95%',
        marginLeft:9,
        backgroundColor:'gray',
        marginTop:-29,
    },
    block3:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    faux:{
        display: 'flex',
        border: 'solid',
        borderWidth: 1,
        borderColor: 'rgb(129, 226, 178)',
        borderRadius: 4,
        justifyContent:'center',
        color: 'rgb(129, 226, 178)',
        alignItems: 'center',
        width:30,
        fontWeight:'bold',
        marginHorizontal:9,
        fontSize:13,

    },
    faux2:{
        display: 'flex',
        border: 'solid',
        borderWidth: 2,
        borderColor: 'rgb(129, 226, 178)',
        borderRadius: 4,
        justifyContent:'center',
        color: 'rgb(129, 226, 178)',
        alignItems: 'center',
        width:200,
        fontWeight:'bold',
        marginHorizontal:9,
        fontSize:20,

    }



});

export default LastS;