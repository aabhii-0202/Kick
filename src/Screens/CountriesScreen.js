import React, {useState,useEffect} from 'react';
import { Text,View, StyleSheet,Button,FlatList, SafeAreaView } from 'react-native';
import SearchBar from '../Components/Common/SearchBar';
import CountryList from '../Components/CountryList';
import {Colors} from '../Components/Common/Colors'
import countriesHook from '../api/countriesHook';
import Space from '../Components/Common/Space';

const CountriesScreen = ({navigation}) => {

    const [apicall,results] = countriesHook();
    const [term,setTerm] = useState('');
    const [countries,setCountries] = useState([]);

    console.log('Results: '+results.length);
    

    useEffect(()=>{
        searchFilter('');
    },[results]);

    const searchFilter = (e)=>{
        console.log('Search: '+e);
        if(e===''||e.length==0){
            setCountries(results);
        }else if(!e){
            setCountries(results);
        }else{
            const text = e.toLowerCase();
            const data = results;
            const filteredList = data.filter((item)=>{
                return item.name.toLowerCase().search(text) > -1 ;
            });
            setCountries(filteredList);
        }
        console.log('Countries: '+countries.length);
    }

    
    return (
        <SafeAreaView style={styles.view}>
            <Space/>
            <SearchBar
                placeholder='Search your country'
                term={term}
                onTermChanged={(newTerm) => {
                    setTerm(newTerm);
                    searchFilter(term);
                }}
            />
            {/* <Button 
            title='Refresh'
            onPress={apicall}
            /> */}
            <FlatList
                data={countries}
                numColumns={2}
                keyExtractor={(countries,index)=>countries.code+index}
                renderItem={({item})=>{
                    return (
                        <CountryList
                            onclick = {()=>navigation.navigate('Leagues',{code:item.code})}
                            item = {item}
                        />
                    );
                }}
            />
            <Space/>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    view:{
        backgroundColor: Colors.mybackground,
    }
});

export default CountriesScreen;