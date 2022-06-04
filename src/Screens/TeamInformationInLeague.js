import React from 'react';
import {View, Text,StyleSheet } from 'react-native';


const TeamInformationInLeague = ({route,navigation}) => {

    const{league,team} = route.params;

    return (
        <View>
            <Text>TeamInformationInLeague {league} {team}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});


export default TeamInformationInLeague;