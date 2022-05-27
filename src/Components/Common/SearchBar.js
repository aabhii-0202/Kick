import React from 'react';
import { View,Text, TextInput,StyleSheet } from 'react-native';
import {Colors} from './Colors'

const SearchBar = ({placeholder,term,onTermChanged}) => {


     return (
         <View style={styles.view}>
            <TextInput
                placeholder={placeholder}
                value={term}
                onChangeText={newTerm => onTermChanged(newTerm)}
            />
         </View>
    );
};


const styles = StyleSheet.create({
    view:{
        backgroundColor:Colors.white,
        borderColor: Colors.black,
        borderRadius:8,
        padding:2,
        marginHorizontal:16,
        marginVertical:8,
        paddingStart:16,
    }
});


export default SearchBar;