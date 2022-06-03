import React, {useEffect,useState} from 'react';
import {View, Text,StyleSheet,FlatList } from 'react-native';
import axios from 'axios';
import LeaguesList from '../Components/LeaguesList';
import SearchBar from '../Components/Common/SearchBar';


const TeamSearch = ({navigation,route}) => {

    const[ teams, setTeams ]= useState([]);
    const {id} = route.params;
    const [term,setTerm]= useState('');
    

    const searchApi = (t)=>{
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
            params: {search: t},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
              setTeams(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });
    }

    return (
        <View>
            <SearchBar
                placeholder='Search Your Favrouit Team'
                term={term}
                onTermChanged={(newTerm) => {
                    setTerm(newTerm);
                    searchApi(term);
                }}
            />
            <FlatList
                data={teams}
                keyExtractor={(teams)=>teams.team.id}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <LeaguesList
                            onclick = {()=>navigation.navigate('TeamInfo',{
                                id:item.team.id
                            })}
                            logo = {item.team.logo}
                            name = {item.team.name}
                        />
                    );
                }} 

            />
            
        </View>
    );
};

export default TeamSearch;