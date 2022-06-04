import React, {useEffect,useState} from 'react';
import {View, Text,StyleSheet,FlatList } from 'react-native';
import axios from 'axios';
import LeaguesList from '../Components/LeaguesList';
import SearchWithSumbit from '../Components/Common/SearchWithSumbit';
import { Colors } from '../Components/Common/Colors';


const TeamSearch = ({navigation}) => {

    const[ teams, setTeams ]= useState([]);
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

    const renderList = () => {
        return teams.length>0
        ?
        <FlatList
                data={teams}
                keyExtractor={(teams)=>teams.team.id}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <LeaguesList
                            onclick = {()=>navigation.navigate('TeamInfo',{
                                id:item.team.id,
                                name: item.team.name,
                                logo: item.team.logo
                            })}
                            logo = {item.team.logo}
                            name = {item.team.name}
                        />
                    );
                }} 
            />
            :
            <Text style={{
                color: Colors.black,
                textAlign:'center',
                alignSelf: 'center',
                fontWeight: 'bold',
                margin:100,
                fontSize:32
            }}>No Such Team</Text>
    }

    return (
        <View>
            <SearchWithSumbit
                placeholder='Search Your Favrouit Team'
                term={term}
                submit = {() => {
                    if(term.length>2)
                    searchApi(term);
                }}
                onTermChanged={(newTerm) => {
                    setTerm(newTerm);
                    
                }}
            />
            {renderList()}
        </View>
    );
};

export default TeamSearch;