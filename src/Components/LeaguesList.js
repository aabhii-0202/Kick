import React from 'react';
import { Image,View,Text ,StyleSheet,TouchableOpacity } from 'react-native';
import {Colors} from '../Components/Common/Colors';


const LeaguesList = ({logo,name,onclick}) => {
     return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onclick}
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
        backgroundColor: Colors.white,


    },touchable:{
        width:'30%',
        height:150,
        marginHorizontal:7,
        marginVertical: 8,
        padding:4,
        backgroundColor: Colors.white,
        borderColor: 'black',
        borderWidth:1,
        borderRadius:8
    },
    text:{
        color: 'black',
        fontSize: 20,
        flex:1,
        textAlign: 'center',
        fontWeight:'bold',
        
    },
});


export default LeaguesList;