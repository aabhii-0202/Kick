

import React from 'react';
import { View,Text, TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import {Colors} from './Colors'

const SearchWithSumbit = ({placeholder,term,onTermChanged,submit}) => {


     return (
         <View style={styles.view}>
            <TextInput
                placeholder={placeholder}
                value={term}
                onChangeText={newTerm => onTermChanged(newTerm)}
                style={{
                    flex:2
                }}
            />
            <TouchableOpacity
                onPress={submit}
                style={{
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={require('../../../Assets/images/search.png')}
                    style={{
                        height:30,
                        width:30,
                        alignSelf: 'center',
                        marginHorizontal:16,
                        backgroundColor:Colors.white
                    }}
                
                />


            </TouchableOpacity>
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
        flexDirection: 'row',
    }
});


export default SearchWithSumbit;