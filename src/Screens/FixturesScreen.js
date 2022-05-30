import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,FlatList,Image,TouchableOpacity } from 'react-native';
import FixtureComp from '../Components/FixtureComp';
import axios from 'axios';
import { Colors } from '../Components/Common/Colors';
import DatePicker from 'react-native-date-picker'



const FixturesScreen = ({navigation}) => {

    useEffect(()=>{
        apicall();
    },[fixtures]);
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

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
              console.log("No of Fixtures: "+fixtures.length);
          }).catch(function (error) {
              console.error(error);
          });
    };

    const fixtureByDate = (text) =>{

        const date = text.getDate();
        var month = text.getMonth();
        month++;
        var year = text.getYear();
        year+=1900;
        var dd ='';

        if(month<10){
            if(date<10){
                dd=year+'-0'+month+'-0'+date;
            }
            else{
                dd=year+'-0'+month+'-'+date;
            }
        }else{
            if(date<10){
                dd=year+'-'+month+'-0'+date;
            }
            else{
                dd=year+'-'+month+'-'+date;
            }
        }

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: {date: dd},
            headers: {
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
              'X-RapidAPI-Key': '7eccf3c916msh125eb404409a0fcp1de117jsn811515176179'
            }
          };
          
          axios.request(options).then(function (response) {
            setFixtures(response.data.response);
            console.log(response.data.response);
            console.log("No of Fixtures: "+fixtures.length);
          }).catch(function (error) {
              console.error(error);
          });
    }

    const renderlist = ()=>{
        return fixtures.length>0 ? <FlatList
        style={{marginBottom:20}}
        data={fixtures}
        keyExtractor={(fixtures,index)=>fixtures.fixture.id+index}
        renderItem={({item})=>{
            return (
                <FixtureComp
                    onclick={()=>{console.log('Fixture clicked')}}
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
    <Text style={styles.message}>No Fixtures For Today. You Can Search For Some Other Date</Text>
    } 
    
    return (
        <View>
            <Text>Fixture Screen</Text>
            <TouchableOpacity
                onPress={()=>setOpen(true)}
            >
            <Image
                style={{height:20,width:20}}
                source={require('../../Assets/images/calander.png')}
            />
            </TouchableOpacity>
            
        
            <DatePicker
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            fixtureByDate(date)
            }}
            onCancel={() => {
            setOpen(false)
            }}
        />
            {renderlist()}
        </View>
    );
};


const styles = StyleSheet.create({
    message:{
        fontSize:19,
        color:Colors.black,
        marginHorizontal:16,
        alignSelf:'center',
        marginTop:100,
        textAlign: 'center'

    }

});


export default FixturesScreen;