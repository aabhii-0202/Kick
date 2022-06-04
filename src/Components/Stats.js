import React from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import { Colors } from './Common/Colors';
import Detail from './Common/Detail';


const Stats = ({stats}) => {

    console.log(stats+"  length");

     return (
         stats?
        <View style={styles.parent}>
            <Image
                source={{uri:stats.league.logo}}
                style={styles.pic}
            />
            <Text style={styles.text}>{stats.league.name}</Text>
            <View style={styles.container}>
            <Detail
                title='Season'
                value= {stats.league.season}
            />
            <Detail
                title='Country'
                value= {stats.league.country}
            />
            <Detail
                title='Appearance'
                value={stats.games.appearences}
            />
            <Detail
                title='Position'
                value={stats.games.position}
            />
            <Detail
                title='Rating'
                value={stats.games.rating}
            />
            <Detail
                title='Goals'
                value={stats.goals.total}
            />
            <Detail
                title='Assist'
                value={stats.goals.assists}
            />
            <Detail
                title='Conceded'
                value={stats.goals.conceded}
            />
            <Detail
                title='Yellow Card'
                value={stats.cards.yellow}
            />
            <Detail
                title='Yellow Red'
                value={stats.cards.yellowred}
            />
            <Detail
                title='Red'
                value={stats.cards.red}
            />
            <Detail
                title='Penality Scored'
                value={stats.penalty.scored}
            />
            <Detail
                title='Penality Missed'
                value={stats.penalty.missed}
            />
            <Detail
                title='Penality Saved'
                value={stats.penalty.saved}
            />
            </View>
        </View>
        :<Text>No stats</Text>
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
        marginVertical:16,
        marginHorizontal:16,
        fontWeight:'bold'
    },container:{
        marginHorizontal:16
    }
});


export default Stats;