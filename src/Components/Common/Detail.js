import React from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { Colors } from './Colors';


const Detail = ({title,value}) => {


     return (
        <View style={styles.view}>
            <Text style={styles.key}>{title}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    key:{
        color:Colors.black,
        fontSize:18,
        marginHorizontal:8,
        flex:1
    },
    value:{
        color:Colors.black,
        fontSize:18,
        marginHorizontal:8,
        alignSelf:'flex-end'
    },
    view:{
        flexDirection:'row',
        marginHorizontal:16,
        marginVertical:4
    }
});


export default Detail;