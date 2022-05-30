import React from 'react';
import {View, Text,StyleSheet } from 'react-native';


const FixtureDetails = ({route,navigation}) => {

    const {id} = route.params;
     return (
        <View>
            <Text>FixtureDetails</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});


export default FixtureDetails;