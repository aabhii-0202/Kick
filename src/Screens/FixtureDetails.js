import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import axios from 'axios';
import {Colors} from '../Components/Common/Colors';
import TeamvsTeam from '../Components/TeamvsTeam';


const FixtureDetails = ({route,navigation}) => {


    const [fixturedetail,setfixture] = useState();
    
    const {id} = route.params;
    useEffect(()=>{
        getfixturedetails(id);
    },[]);

    const getfixturedetails = (id) => {
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
            console.log(fixturedetail)
          }).catch(function (error) {
              console.error(error);
          });
    }

    const renderPage = () => {
        return fixturedetail ?
        <View style={styles.parentview}>
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
                    homescore={4}
                    awayscore={2}
                    homeid={fixturedetail.teams.home.id}
                    awayid={fixturedetail.teams.away.id}
                />
            </View>




        </View>
        :
        <Text>Loading</Text>
        
    }

     return (
        <View>
            <Text>FixtureDetails</Text>
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
        width:100,
        alignSelf: 'center'
    },

});


export default FixtureDetails;