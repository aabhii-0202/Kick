import React from 'react';
import { Text, Input, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { StackActions, NavigationActions } from 'react-navigation';
import SearchBar from '../Components/Common/SearchBar';

const HomeScreen = ({navigation}) => {

     return (
        <View style={styles.view}>
            <SearchBar
                placeholder='Search your country'
            />
            <SearchBar
                placeholder='Search your country'
            />
        </View>
    );
};



const styles = StyleSheet.create({
    view:{
        backgroundColor: '000000',
        height: 200,
        width: 200
    }
});


export default HomeScreen;