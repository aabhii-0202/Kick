import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,Image, ScrollView } from 'react-native';
import axios from 'axios';
import { Colors } from '../Components/Common/Colors';
import Heading from '../Components/Common/Heading';
import LeaguesList from '../Components/LeaguesList';
import DetailsTeam from '../Components/Common/DetailsTeam';

const TeamInformationInLeague = ({route,navigation}) => {

    const{league,team} = route.params;
    const [squad,setsquad] = useState([]);
    const [stats, setTeamStats] = useState({response:null});

    useEffect(()=>{
        getTeamStats();
        getSquad();
    },[]);

    const getSquad = () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
            params: {team: team},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
              setsquad(response.data.response[0].players)
          }).catch(function (error) {
              console.error(error);
          });
    }

    const renderSquad = () => {
        return squad.length>0 ?
            <View style={{marginBottom:35}}>
                <Heading
                    text='Squad'
                />
                <FlatList
                style={{marginHorizontal:10}}
                data={squad}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <LeaguesList
                            onclick = {()=>playerinfo(item.id)}
                            logo = {item.photo}
                            name = {item.name}
                        />
                    );
                }}
            />   

            </View>
            :
            <Text style = {{
                color: Colors.black,
                fontSize:24,
                alignSelf: 'center',
                fontWeight: 'bold',
                margin:32
            }}>Loading Squad</Text>
    }

    const getTeamStats = () => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
            params: {league: league, season: '2020', team: team},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
            setTeamStats(response.data)
          }).catch(function (error) {
              console.error(error);
          });
    }

    const renderStats = () => {
        return stats.response!==null?
            <View style={styles.statsView}>
                <Image  
                    style={styles.image}
                    source={{uri:stats.response.team.logo}}
                />
                <Text style={styles.name}>{stats.response.team.name}</Text>
                <View style={styles.details}>
                    <DetailsTeam
                        title='Country'
                        value={stats.response.league.country}/>
                    <DetailsTeam
                        title='Played'
                        value={stats.response.fixtures.played.total}/>
                    <DetailsTeam
                        title='Won'
                        value={stats.response.fixtures.wins.total}/>
                    <DetailsTeam
                        title='Draw'
                        value={stats.response.fixtures.draws.total}/>
                    <DetailsTeam
                        title='Loses'
                        value={stats.response.fixtures.loses.total}/>
                    <DetailsTeam
                        title='Biggest Win streak'
                        value={stats.response.biggest.streak.wins}/>
                    <DetailsTeam
                        title='Biggest Win Home'
                        value={stats.response.biggest.wins.home}/>
                    <DetailsTeam
                        title='Biggest Win Away'
                        value={stats.response.biggest.wins.away}/>
                    
                </View>
                
            </View>
        :
        <Text style = {{
            color: Colors.black,
            fontSize:24,
            alignSelf: 'center',
            fontWeight: 'bold',
            margin:32
        }}>Loading Squad</Text>
    }

    const playerinfo = (id) => {
        console.log('Clicked on Player: ');
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
              if(response.data.response.length>0){
                  console.log('Response: ');
                  navigation.navigate('PlayerInfo',{details:response.data.response[0]});
              }
          }).catch(function (error) {
              console.error(error);
          });
    }



    return (
        <ScrollView>
            {renderStats()}
            {renderSquad()}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    image:{
        height:200,
        width:200,
        margin:16,
        alignSelf:'center'
       
    },
    statsView:{
        alignSelf:'center',
        width:'100%'
    },
    name:{
        color:Colors.black,
        fontWeight:'bold',
        fontSize:24,
        alignSelf:'center'
    },
    details:{
        marginVertical:16
    }
});


export default TeamInformationInLeague;