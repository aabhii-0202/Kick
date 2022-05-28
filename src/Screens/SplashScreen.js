import React from 'react';
import {View}from 'react-native';
import Button from '../Components/Common/Button';
import { CommonActions } from '@react-navigation/native';
import CardSection from '../Components/Common/CardSection';
import LottieView from 'lottie-react-native';


const SplashScreen = ({navigation}) => {
  
   return (
    <View>
      <LottieView 
        source={require('../../Assets/images/splash.json')} 
        size={50} 
        autoPlay 
        loop 
        resizeMode="cover" 
        style={styles.image} />
      <CardSection style={styles.btn}>
        <Button 
          onPress={ () =>{
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Home' }
                ],
              })
            );
          }
          }
        >Kick It!</Button>
      </CardSection>
    </View>
  );
};

const styles = {
  image:{
    width: 300, 
    aspectRatio: 300 / 500,
    flexGrow: 1, 
    alignSelf: 'center',
  },
  btn:{
    justifyContent: 'flex-end',
    width: '100%',
  }
}



export default SplashScreen;