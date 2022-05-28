import React from 'react';
import {View, Text,StyleSheet } from 'react-native';


const TeamInfo = ({route,navigation}) => {

    const {id} = route.params;

     return (
        <View>
            <Text>Team Info: {id}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});


export default TeamInfo;