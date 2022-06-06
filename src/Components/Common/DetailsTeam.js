import React from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { Colors } from './Colors';


const DetailsTeam = ({title,value}) => {


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
        flex:1
    },
    value:{
        color:Colors.black,
        fontSize:18,
        alignSelf:'flex-end',
    },
    view:{
        flexDirection:'row',
        marginVertical:4,
        marginHorizontal:32,
    }
});


export default DetailsTeam;