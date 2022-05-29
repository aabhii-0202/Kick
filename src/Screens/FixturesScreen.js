import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList } from 'react-native';
import FixtureComp from '../Components/FixtureComp';
import axios from 'axios';


const FixturesScreen = ({navigation}) => {

    useEffect(()=>{
        apicall();
    },[fixtures]);

    const [fixtures,setFixtures] = useState([]);

    const apicall = () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {live: 'all'},
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

     return (
        <View>
            <Text>Fixtures Screen</Text>
            <FlatList
                style={{marginBottom:20}}
                data={fixtures}
                // keyExtractor={(countries,index)=>countries.code+index}
                renderItem={({item})=>{
                    return (
                        <FixtureComp
                            onclick={()=>{console.log('Fixture clicked')}}
                            logohome={item.teams.home.logo}
                            logoaway={item.teams.away.logo}
                            homename={item.teams.home.name}
                            awayname={item.teams.away.name}
                            homescore={item.goals.home.name}
                            awayscore={item.goals.away.name}
                            leaguename={item.league.name}
                            matchdatetime={item.fixture.date} 
                        />
                    );
                }}
            />

            {/* <FixtureComp
                onclick={()=>{console.log('Fixture clicked')}}
                logohome={fixtures[1].teams.home.logo}
                logoaway={fixtures[1].teams.away.logo}
                homename={fixtures[1].teams.home.name}
                awayname={fixtures[1].teams.away.name}
                homescore={fixtures[1].goals.home.name}
                awayscore={fixtures[1].goals.away.name}
                leaguename={fixtures[1].league.name}
                matchdatetime={fixtures[1].fixture.date} 
            /> */}
        </View>
    );
};


const styles = StyleSheet.create({

});


export default FixturesScreen;