import React, {useEffect,useState} from 'react';
import {View, Text,StyleSheet,FlatList } from 'react-native';
import axios from 'axios';
import LeaguesList from '../Components/LeaguesList';


const TeamSearch = ({navigation,route}) => {

    useEffect(()=>{
        apicall();
    },[teams]);

    const[ teams, setTeams ]= useState([]);

    const apicall = () =>{

        const {id} = route.params;
        const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v2/teams/league/'+id,
        headers: {
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
        }
        };

        axios.request(options).then(function (response) {
            setTeams(response.data.api.teams);
        }).catch(function (error) {
            console.error(error);
        });
    }

    return (
        <View>
            <FlatList
                data={teams}
                keyExtractor={(teams,index)=>teams.team_id+index}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <LeaguesList
                            onclick = {()=>navigation.navigate('TeamInfo',{
                                id:item.team_id
                            })}
                            logo = {item.logo}
                            name = {item.name}
                        />
                    );
                }} 

            />
            
        </View>
    );
};

export default TeamSearch;