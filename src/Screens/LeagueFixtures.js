import React,{useState,useEffect} from 'react';
import {View, Text,FlatList } from 'react-native';
import FixtureComp from '../Components/FixtureComp';
import axios from 'axios';
import { Colors } from '../Components/Common/Colors';



const LeagueFixtures = ({ navigation,route}) => {

    useEffect(()=>{
        apicall();
    },[fixtures]);
    const {id} = route.params;
    const [fixtures,setFixtures] = useState([]);

    const apicall = () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {league: id, season: '2022'},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
              setFixtures(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });
    };

    

    const renderlist = ()=>{
        return fixtures.length>0 ? <FlatList
        style={{marginBottom:20}}
        data={fixtures}
        keyExtractor={(fixtures,index)=>fixtures.fixture.id+index}
        renderItem={({item})=>{
            return (
                <FixtureComp
                    onclick={()=>navigation.navigate('FixtureDetails',{id:item.fixture.id})}
                    logohome={item.teams.home.logo}
                    logoaway={item.teams.away.logo}
                    homename={item.teams.home.name}
                    awayname={item.teams.away.name}
                    homescore={item.goals.home}
                    awayscore={item.goals.away}
                    leaguename={item.league.name}
                    matchdatetime={item.fixture.date} 
                />
            );
        }}
    /> :
    <Text style={{
        color: Colors.black,
        alignSelf: 'center',
        fontSize:18,
        marginHorizontal:16,
        textAlign:'center',
        marginTop:200
        
    }}>Loading</Text>
    } 
    
    return (
        <View> 
            {renderlist()}
        </View>
    );
};


export default LeagueFixtures;