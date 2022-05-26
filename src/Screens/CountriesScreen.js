import React from 'react';
import { Text,View, StyleSheet,Button,FlatList } from 'react-native';
import SearchBar from '../Components/Common/SearchBar';
import CountryList from '../Components/CountryList';
import {Colors} from '../Components/Common/Colors'
import countriesHook from '../api/countriesHook';

const CountriesScreen = ({navigation}) => {

    const [apicall,results] = countriesHook();
    console.log(results);
    return (
        <View style={styles.view}>
            {/* <SearchBar
                placeholder='Search your country'
            /> */}
            <Text>HEllo</Text>
            <Button 
            title='Refresh'
            onPress={apicall}
            />
            <FlatList
                data={results}
                keyExtractor={(results,index)=>results.code+index}
                renderItem={({item})=>{
                    return (
                        <CountryList
                            onclick = {()=>navigation.navigate('Leagues',{code:item.code})}
                            item= {item}
                            numColumns={2}
                        />
                    );
                }}
            />
            <Text>HEllo</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    view:{
        backgroundColor: Colors.mybackground,
    }
});

export default CountriesScreen;