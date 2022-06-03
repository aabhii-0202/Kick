import React, {useState} from 'react';
import {View, Text,TouchableOpacity } from 'react-native';
import { Colors } from './Colors';


const NewButton = ({ onPressed, text, focused }) => {
    return (
      <TouchableOpacity onPress={onPressed} 
        style={{
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: focused?Colors.white:Colors.tabnavNotFocused,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: focused?Colors.white:Colors.tabnavNotFocused,
        }}>
        <Text style={{
            alignSelf: 'center',
            color:Colors.black,
            fontSize: 16,
            paddingTop: 10,
            paddingBottom: 10,
        }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };
  
export default NewButton;