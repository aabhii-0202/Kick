import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Image,ScrollView } from 'react-native';
import axios from 'axios';
import {Colors} from '../Components/Common/Colors';
import Detail from '../Components/Common/Detail';
import Stats from '../Components/Stats';
import Heading from '../Components/Common/Heading';

const PlayerInfo = ({route,navigation}) => {

    const {id} = route.params;
    const [playerinfo,setplayerinfo] = useState();

    useEffect(()=>{
        fetchdata
    },[playerinfo]);


    const fetchdata =  () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {id: id, season: '2020'},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
            setplayerinfo(response.data.response);
            console.log(playerinfo);
          }).catch(function (error) {
              console.error(error);
          });
    }

    return (
         
        <ScrollView style={styles.container}>
            <Text>{id}</Text>
            <Image
                source={{uri:'https://media.api-sports.io/football/players/276.png'}}
                style={styles.pic}
                />
            <Text style={styles.name}>Neymar</Text>
            <View>
            <Detail
                title='First Name'
                value='Neymar'
            />
            <Detail
                title='Last name'
                value='da Silva Santos Júnior'
            />
            <Detail
                title='Age'
                value='29'
            />
            <Detail
                title='Birth date'
                value='1992-02-05'
            />
            <Detail
                title='Birth Place'
                value='Mogi das Cruzes,Brazil'
            />
            <Detail
                title='Nationality'
                value='Brazil'
            />
            <Detail
                title='Height'
                value='175 cm'
            />
            <Detail
                title='Weight'
                value='68 kg'
            />
            </View>
            <Heading text='Stats'/>
            <Stats/>
            
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    pic:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderColor:Colors.black,
        borderWidth:1,
        marginVertical:16
    },
    name:{
        color:Colors.black,
        alignSelf:'center',
        fontSize:32
    },
    container:{
        marginHorizontal:16
    }
});


export default PlayerInfo;