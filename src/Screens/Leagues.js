import React, {useEffect, useState} from 'react';
import { View,StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import LeaguesList from '../Components/LeaguesList';

const Leagues = ({route,navigation}) => {


    const {code}= route.params;
    const [leagues,setleagues] = useState([]);


    useEffect(()=>{
        apicall();
    },[]);

    const apicall = async() => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {code: code},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
                setleagues(response.data.response);
          }).catch(function (error) {
                console.error(error);
          });
    }
    return (
        <View>
            <FlatList
                data={leagues}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <LeaguesList
                            onclick = {()=>navigation.navigate('InsideLeagues',{
                                id:item.league.id
                            })}
                            logo = {item.league.logo}
                            name = {item.league.name}
                        />
                    );
                }} 

            />
        </View>
    );
};


const styles = StyleSheet.create({

});


export default Leagues;

