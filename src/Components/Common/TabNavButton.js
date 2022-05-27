import React from 'react';
import {View, Text,StyleSheet } from 'react-native';
import { Colors } from './Colors';


const TabNavButton = ({focused,name}) => {


     return (
        <View style={{
            width:'90%',
            height: '90%',
            backgroundColor:focused?Colors.tabnavFocused:Colors.mybackground,
            borderRadius:8,
            marginStart:8
            }}>
            <Text style={{
              flex:1,
              fontSize:24,
              color:focused?Colors.mybackground:Colors.tabnavFocused,
              alignSelf: 'center',
              fontWeight: '600',
              paddingTop:2,
            }}>
                {name}
            </Text>
          </View>
    );
};


export default TabNavButton;