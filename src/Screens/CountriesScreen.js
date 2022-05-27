import React, {useState,useEffect} from 'react';
import { Text,View, StyleSheet,Button,FlatList } from 'react-native';
import SearchBar from '../Components/Common/SearchBar';
import CountryList from '../Components/CountryList';
import {Colors} from '../Components/Common/Colors'
import countriesHook from '../api/countriesHook';

const CountriesScreen = ({navigation}) => {

    const [apicall,results] = countriesHook();
    
    return (
        <View style={styles.view}>
            {/* <SearchBar
                placeholder='Search your country'
            /> */}
            <Button 
            title='Refresh'
            onPress={apicall}
            />
            <FlatList
                data={results}
                numColumns={2}
                keyExtractor={(results,index)=>results.code+index}
                renderItem={({item})=>{
                    return (
                        <CountryList
                            onclick = {()=>navigation.navigate('Leagues',{code:item.code})}
                            item = {item}
                        />
                    );
                }}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    view:{
        backgroundColor: Colors.mybackground,
    }
});

export default CountriesScreen;