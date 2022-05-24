import React from 'react';
import { View,Text, TextInput,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const SearchBar = ({placeholder}) => {


     return (
         <View style={styles.view}>
            <TextInput
                styles={styles.input}
                placeholder={placeholder}
            />
         </View>
    );
};


const styles = StyleSheet.create({
    input:{
      

    },
    view:{
        
    }
});


export default SearchBar;