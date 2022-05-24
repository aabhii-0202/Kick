import React from 'react';
import { View,Text ,StyleSheet,TouchableOpacity } from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import {Colors} from '../Components/Common/Colors';
import Leagues from '../Screens/Leagues';


const App = ({url,name,nav}) => {

     return (
         
        <TouchableOpacity
            style={styles.touchable}
            onPress={()=>{
                nav.navigate('Leagues');
            }}
        >
            <View style={styles.image}>
            <SvgCssUri
                height='100%'
                width='100%'
                uri={url}
                style={styles.flag}
            />
            </View>
            <Text 
                style={styles.text}
            >{name}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    flag:{
        
    },
    text:{
        color: 'black',
        fontSize: 20,
        flex:1,
        textAlign: 'center',
        fontWeight:'bold',
        
    },
    image:{
        backgroundColor:'white',
        flex:4,
        backgroundColor: Colors.mybackground,


    },touchable:{
        width:'40%',
        height:150,
        marginHorizontal:16,
        marginVertical: 8,
        padding:4,
        backgroundColor: Colors.mybackground
    },
});


export default App;