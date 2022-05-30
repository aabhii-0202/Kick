import React from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { Colors } from './Common/Colors';
import TeamWithNameinside from './TeamWithNameinside';


const TeamvsTeam = ({  
    navigation,
    logohome,
    logoaway,
    homename,
    awayname,
    homescore,
    awayscore,
    homeid,
    awayid  
}) => {

return (
    <View
        style={styles.parent}
    >
    <View>
    <View style={styles.logocontainer}>
    <TeamWithNameinside
        logo={logohome}
        name={homename}
        // click={navigation.navigate('TeamInfo2',{id:homeid})}
        />
    <View style={styles.textview}>
    <Text style={styles.text}>
        {homescore} - {awayscore}
    </Text>
    </View>
    <TeamWithNameinside
        logo={logoaway}
        name={awayname}
        // click={navigation.navigate('TeamInfo2',{id:awayid})}
        />
    </View>
    </View>
    </View>
);
};


const styles = StyleSheet.create({
    parent:{
        borderColor:Colors.black,
        marginHorizontal:16,
        backgroundColor:Colors.backgroundColor,
        marginVertical:8

    },
    logocontainer:{
        flexDirection: 'row'
    },
    textview:{
        flex:1,
        marginTop:50,
    },
    text:{
        fontSize:24,
        flex:1,
        alignSelf: 'center',
        color:Colors.black,
        fontWeight:'bold'
    },
    baseline:{
        color:Colors.black,
        fontSize:16,
        alignSelf:'center',
        marginTop:4,
        marginBottom:8
    }
});


export default TeamvsTeam;