import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Image,ScrollView,FlatList } from 'react-native';
import axios from 'axios';
import {Colors} from '../Components/Common/Colors';
import TeamvsTeam from '../Components/TeamvsTeam';
import Heading from '../Components/Common/Heading';
import EventItem from '../Components/EventItem';
import TeamLineup from '../Components/TeamLineup';
import NewButton from '../Components/Common/NewButton';


const FixtureDetails = ({route,navigation}) => {


    const [fixturedetail,setfixture] = useState();
    const [foucsed1,setfocused1] = useState(false);
    const [foucsed0,setfocused0] = useState(true);
    const [index,setindex] = useState(0);
    
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
          }).catch(function (error) {
              console.error(error);
          });
    }

    const showdetails = () => {
        return fixturedetail.lineups.length>0 
            ?(
            <View>
            <Heading text="Lineups" /> 
            <View style={styles.tabview}>
                <NewButton
                    onPressed={()=>{
                        setfocused1(false);
                        setfocused0(true);
                        setindex(0);
                    }}
                    text={fixturedetail.teams.home.name}
                    focused={foucsed0}
                    />
                <NewButton
                    onPressed={()=>{
                        setfocused1(true);
                        setfocused0(false);
                        setindex(1);
                    }}
                    text={fixturedetail.teams.away.name}
                    focused={foucsed1}
                    />
                
            </View>
            <TeamLineup 
                index={index}
                lineup={fixturedetail.lineups}
            />
            </View>)
            :
            <Text style={styles.datanotprovided}>Lineup data is not available for now.</Text>
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
            {showdetails()}


        </ScrollView>
        :
        <Text>Loading</Text>
        
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
    tabview:{
        flexDirection:'row',
        marginHorizontal:16,
        marginVertical:8,
        borderRadius:8,
        borderWidth:1,
    },
    datanotprovided:{
        fontSize:16,
        color:Colors.black,
        alignSelf:'center',
        marginBottom:20
    }

});


export default FixtureDetails;