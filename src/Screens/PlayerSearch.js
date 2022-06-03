import React, {useState} from 'react';
import {View, Text,StyleSheet,FlatList } from 'react-native';
import SearchBar from '../Components/Common/SearchBar';
import axios from 'axios';
import LeaguesList from '../Components/LeaguesList';
import  {Colors} from '../Components/Common/Colors';

const PlayerSearch = ({route,navigation}) => {

    const {id} = route.params;
    const [player,setplayer] = useState([]);
    const [term,setTerm] = useState('');
    const [error,setError]= useState(false);

    const searchPlayer = (name) => {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: {league: '61', search: 'neymar'},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              if(response.data.response.length===0){
                  
                  setError(true);
              }
              else{
                  setError(false);
              }
              setplayer(response.data.response);
          }).catch(function (error) {
              console.error(error);
          });
    }

    const  renderlist = (navigation) => {
        return error ? <Text style={{
            fontSize:24,
            alignSelf:'center',
            marginVertical:90,
            color:Colors.black,
            marginHorizontal:16,
            textAlign:'center'
        }}>Unable to search. Please see if you are in a right league. Player's name must be correct. Write atleast 5 characters.</Text>
        : <FlatList
        data={player}
        keyExtractor={(player)=>player.id}
        numColumns={3}
        renderItem={({item})=>{
            return (
                <LeaguesList
                    onclick={()=>navigation.navigate('PlayerInfo',{id:item.player.id})}
                    logo = {item.player.photo}
                    name = {item.player.name}
                />
            );
        }} 

    />
    }

     return (
        <View>
            <SearchBar
                placeholder='Search Your Favrouit Team'
                term={term}
                onTermChanged={(newTerm) => {
                    setTerm(newTerm);
                    if(newTerm.length>4)
                        searchPlayer(term);
                }}
            />
            {renderlist(navigation)}
            
        </View>
    );
};


const styles = StyleSheet.create({

});


export default PlayerSearch;