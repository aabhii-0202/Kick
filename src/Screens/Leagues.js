import React from 'react';
import { View,Text, TextInput,StyleSheet } from 'react-native';
import CountryList from '../Components/CountryList'


const Leagues = ({navigation}) => {


     return (
        <View>
            <CountryList
                nav = {navigation}
                name="France"
                url="https://media.api-sports.io/flags/fr.svg"
            />
             <CountryList
                nav = {navigation}
                name="Spain"
                url="https://media.api-sports.io/flags/es.svg"
            />
        </View>
    );
};


const styles = StyleSheet.create({

});


export default Leagues;

