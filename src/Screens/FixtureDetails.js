import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Image,ScrollView,FlatList } from 'react-native';
import axios from 'axios';
import {Colors} from '../Components/Common/Colors';
import TeamvsTeam from '../Components/TeamvsTeam';
import Heading from '../Components/Common/Heading';
import EventItem from '../Components/EventItem';
import TeamLineup from '../Components/TeamLineup';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const FixtureDetails = ({route,navigation}) => {


    const [fixturedetail,setfixture] = useState();
    
    const {id} = route.params;
    useEffect(()=>{
        getfixturedetails(id);
    },[]);

    const getfixturedetails = (id) => {
        console.log('Id -> '+id)
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {id: id},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
            setfixture(response.data.response[0]);
            console.log('fixturedetail  '+fixturedetail);
          }).catch(function (error) {
              console.error(error);
          });
    }

    const renderPage = () => {
        return fixturedetail ?
        <ScrollView style={styles.parentview}>
            <View 
                style={styles.leaguelogocontainer}
            >
                <Image
                    source={{uri:fixturedetail.league.logo}}
                    style={styles.leaguelogo}
                />
            </View>
            <View>
            <TeamvsTeam
                    navigation = {navigation}
                    logohome={fixturedetail.teams.home.logo}
                    logoaway={fixturedetail.teams.away.logo}
                    homename={fixturedetail.teams.home.name}
                    awayname={fixturedetail.teams.away.name}
                    homescore={fixturedetail.goals.home}
                    awayscore={fixturedetail.goals.away}
                    homeid={fixturedetail.teams.home.id}
                    awayid={fixturedetail.teams.away.id}
                />
            </View>
            <Heading text="Events" /> 
            <FlatList
                data={fixturedetail.events}
                horizontal={true}
                renderItem={({item})=>{
                    return (
                        <EventItem
                            url = {item.team.logo}
                            name = {item.team.name}
                            timeelapsed = {item.time.elapsed}
                            extratime = {item.time.extra}
                            playername = {item.player.name}
                            asistname = {item.assist.name}
                            type = {item.type}
                            detail = {item.detail}
                    />

                    );
                }}
            />
            <Heading text="Lineups" /> 
            {Lineup()}
            {/* <TeamLineup 
                index={0}
                lineup={fixturedetail.lineups}
            /> */}


        </ScrollView>
        :
        <Text>Loading</Text>
        
    }

    const Lineup = () =>{
        const Tab = createMaterialTopTabNavigator();
        return (
            <Tab.Navigator
                screenOptions  ={{
                tabBarStyle:{
                  backgroundColor:Colors.white,
                  borderRadius:8,
                  margin:16
                },
                tabBarLabelStyle: { 
                    fontSize: 12,
                    color:Colors.black,
                    fontWeight:'bold',
                },
              }}
            >
              <Tab.Screen 
                name={fixturedetail.teams.home.name}
                component={TeamLineup} 
                initialParams={{
                    index: 0,
                    lineup:fixturedetail.lineups
                }}
                />
              <Tab.Screen 
                name={fixturedetail.teams.away.name}
                component={TeamLineup} 
                initialParams={{
                    index:1,
                    lineup:fixturedetail.lineups
                }}
                />
            </Tab.Navigator>
          );
    }

     return (
        <View>
            {renderPage()}  
        </View>
    );
};


const styles = StyleSheet.create({
    parentview:{
        backgroundColor:Colors.mybackground,
        width:'100%'
    },
    leaguelogocontainer:{
        height: 150,
        backgroundColor:Colors.white,
        borderRadius:8,
        margin:16
    },
    leaguelogo:{
        height:'100%',
        width:'auto',
        minWidth:175,
        alignSelf: 'center',
        flexGrow:2,
        alignItems: 'stretch',
        flexDirection:'row'
    },

});


export default FixtureDetails;