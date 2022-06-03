import React from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import { Colors } from './Common/Colors';
import Detail from './Common/Detail';


const Stats = ({stats}) => {


     return (
        <View style={styles.parent}>
            <Image
                source={{uri:'https://media.api-sports.io/football/leagues/61.png'}}
                style={styles.pic}
            />
            <Text style={styles.text}>League 1</Text>
            <View style={styles.container}>
            <Detail
                title='Season'
                value='2020'
            />
            <Detail
                title='Country'
                value='France'
            />
            <Detail
                title='Appearance'
                value='13'
            />
            <Detail
                title='Position'
                value='Attacker'
            />
            <Detail
                title='Rating'
                value='7.307692'
            />
            <Detail
                title='Goals'
                value='6'
            />
            <Detail
                title='Assist'
                value='3'
            />
            <Detail
                title='Conceded'
                value='0'
            />
            <Detail
                title='Yellow Card'
                value='5'
            />
            <Detail
                title='Yellow Red'
                value='1'
            />
            <Detail
                title='Red'
                value='1'
            />
            <Detail
                title='Penality Scored'
                value='3'
            />
            <Detail
                title='Penality Missed'
                value='0'
            />
            <Detail
                title='Penality Saved'
                value='0'
            />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    parent:{
        backgroundColor:Colors.white,
        borderWidth:1,
        borderRadius:8,
        elevation:10,
        margin:16,
        borderColor:Colors.mybackground,
        paddingBottom:16
    },
    pic:{
        height:80,
        width:80,
        alignSelf:'center',
        marginVertical:16,
    },
    text:{
        color:Colors.black,
        fontSize:20,
        alignSelf:'center',
        marginVertical:8
    },container:{
        marginHorizontal:16
    }
});


export default Stats;