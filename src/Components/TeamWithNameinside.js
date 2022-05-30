import React from 'react';
import {View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Colors } from '../Components/Common/Colors';


const TeamWithNameinside = ({logo,name,click}) => {


     return (
        <TouchableOpacity
            onPress={click}
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
            
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    image:{
        height:'100%',
        width:'100%',
        resizeMode: 'contain',
        flex:4,
        backgroundColor: Colors.backgroundColor,


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
        marginTop:20
        
    },
});


export default TeamWithNameinside;