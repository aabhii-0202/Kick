import React from 'react';
import { Text, Input, View, StyleSheet,Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';
import SearchBar from '../Components/Common/SearchBar';
import CountryList from '../Components/CountryList';
import {Colors} from '../Components/Common/Colors'
import football from '../Api/football';

const HomeScreen = ({navigation}) => {

    const searchApi = async () => {
        const response = football.get('/v3/players',{
          params: {
            league: '61',
            search: 'neymar'
          }
        });
        
        response.then(()=>{
            console.log({response});
        })
      }

     return (
        <View style={styles.view}>
            {/* <SearchBar
                placeholder='Search your country'
            /> */}
            <CountryList
                name="France"
                url="https://media.api-sports.io/flags/fr.svg"
            />
             <CountryList
                name="Spain"
                url="https://media.api-sports.io/flags/es.svg"
            />
            {/* <Button
                title='press'
                onPress={searchApi}
            /> */}
        </View>
    );
};



const styles = StyleSheet.create({
    view:{
        backgroundColor: Colors.mybackground,
    }
});


export default HomeScreen;