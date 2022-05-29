import React from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import { Colors } from '../Components/Common/Colors';


const TeamWithName = ({logo,name}) => {


     return (
        <View
            style={styles.touchable}
        >
            <View style={styles.image}>
            <Image
                style={styles.image}
                source={{uri:logo}}
            />
            </View>
            <Text style={styles.text}>
                {name}
            </Text>
            
        </View>
    );
};


const styles = StyleSheet.create({
    image:{
        height:'100%',
        width:'100%',
        resizeMode: 'contain',
        flex:4,
        backgroundColor: Colors.white,


    },touchable:{
        width:'30%',
        height:150,
        marginHorizontal:7,
        marginVertical: 8,
        padding:4,
        
    },
    text:{
        color: 'black',
        fontSize: 20,
        flex:1,
        textAlign: 'center',
        fontWeight:'600',
        
    },
});


export default TeamWithName;