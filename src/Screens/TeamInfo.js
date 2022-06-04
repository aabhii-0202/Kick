import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,Image,ScrollView } from 'react-native';
import LeaguesList from '../Components/LeaguesList';
import { Colors } from '../Components/Common/Colors';
import axios from 'axios';


const TeamInfo = ({route,navigation}) => {

    const {id,name,logo} = route.params;
    const [leagues,setlist] = useState([]);

    useEffect(()=>{
        apicall();
    },[!leagues]);

    const apicall = async  ()=>{
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {team: id},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
              setlist(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });
        }


    const renderList = () => {
        return leagues.length>0 ?
        <View>
            <FlatList
                data={leagues}
                numColumns={3}
                renderItem={({item})=>{
                    return (
                        <LeaguesList
                            onclick = {()=>navigation.navigate('TeamInformationInLeague',{
                                league:item.league.id,
                                team: id
                            })}
                            logo = {item.league.logo}
                            name = {item.league.name}
                        />
                    );
                }} 

            />
        </View>
        : <Text>Unable to fetch</Text>
    }

    return (
        <ScrollView>
            <Image
                source={{uri:logo}}
                style={{
                    height:200,
                    width: '100%'
                }}
                />
            <Text style={styles.name}>{id} {name}</Text>
            {renderList()}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    name:{
        color:Colors.black,
        fontSize:24,
        alignSelf: 'center',
        fontWeight: 'bold',
        margin:16
    }
});


export default TeamInfo;