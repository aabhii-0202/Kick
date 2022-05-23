import React from 'react';
import {View, Text }from 'react-native';
import Button from '../Components/Common/Button';
import { CommonActions } from '@react-navigation/native';


const SplashScreen = ({navigation}) => {
   return (
    <View>
      <Text
        style={{marginVertical:200,marginLeft:160}}>Splash Screen
      </Text>
      <Button
        onPress={ () =>{
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Home' },
                
              ],
            })
          );
        }
        }
      >Kick It!</Button>

    </View>
  );
};



export default SplashScreen;