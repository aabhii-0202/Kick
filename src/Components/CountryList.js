import React from 'react';
import { View,Text ,StyleSheet,TouchableOpacity } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import {Colors} from '../Components/Common/Colors';


const CountryList = ({item,onclick}) => {

    const {flag,name}=item;
     return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onclick}
        >
            <View style={styles.image}>
            <SvgCssUri
                height='100%'
                width='100%'
                uri={flag}
                style={styles.flag}
            />
            </View>
            <Text 
                style={styles.text}
            >{name}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    flag:{
        backgroundColor:Colors.black
    },
    text:{
        color: 'black',
        fontSize: 20,
        flex:1,
        textAlign: 'center',
        fontWeight:'bold',
        
    },
    image:{
        backgroundColor:Colors.black,
        flex:4,
        backgroundColor: Colors.black,
        borderWidth:3,
        borderColor:Colors.black,
        borderRadius:4,

    },touchable:{
        width:'40%',
        height:150,
        marginHorizontal:20,
        marginVertical: 8,
        padding:4,
        backgroundColor: Colors.mybackground
    },
});


export default CountryList;