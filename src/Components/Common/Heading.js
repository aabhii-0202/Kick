import React from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { Colors } from './Colors';


const Heading = ({text}) => {


     return (
        <View style={styles.view}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    view: {
        height: 50,
        backgroundColor:Colors.white,
        padding:8,
        borderRadius:8,
        margin:16,
        borderWidth:1,
        borderColor:Colors.black
    },
    text:{
        color:Colors.black,
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:24,
    }
});


export default Heading;