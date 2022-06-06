import React,{useState,useEffect} from 'react';
import {View, Text,StyleSheet,Image,ScrollView,FlatList } from 'react-native';
import {Colors} from '../Components/Common/Colors';
import Detail from '../Components/Common/Detail';
import Stats from '../Components/Stats';
import Heading from '../Components/Common/Heading';

const PlayerInfo = ({route,navigation}) => {

    const {details} = route.params;
    const [playerinfo,setplayerinfo] = useState({});
    const [statistics,setStatistics] = useState([]);

    useEffect(()=>{
        fetchdata();
    },[]);


    const fetchdata = () => {
        setplayerinfo(details.player);
        setStatistics(details.statistics);
    }

    const showstats = () => {
        return statistics.length>0 ?
            <View>
            <Heading text='Stats'/>

            <FlatList
                data={statistics}
                horizontal={true}
                renderItem={({item})=>{
                    return (
                        <Stats
                        stats={item}
                        />
                    );
                }}
            />

            
            </View>
            : <Text style={styles.loading}>Loading Stats</Text>
        
    }

    const showplayerdetails = () => {
        return playerinfo ? <View>
             <Image
                source={{uri:playerinfo.photo}}
                style={styles.pic}
                />
            <Text style={styles.name}>{playerinfo.name}</Text>
            <View>
            <Detail
                title='First Name'
                value= {playerinfo.firstname}
            />
            <Detail
                title='Last name'
                value={playerinfo.lastname}
            />
            <Detail
                title='Age'
                value={playerinfo.age}
            />
            <Detail
                title='Nationality'
                value= {playerinfo.nationality}
            />
            <Detail
                title='Height'
                value={playerinfo.height}
            />
            <Detail
                title='Weight'
                value={playerinfo.weight}
            />
            </View>



        </View>
        : <Text style= {styles.loading}>Loading Info</Text>


    }

    return (
         
        
        <ScrollView style={styles.container}>
            {showplayerdetails()}
            {showstats()}
            
            
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    pic:{
        width: 200,
        height: 200,
        alignSelf: 'center',
        borderColor:Colors.black,
        borderWidth:1,
        marginVertical:16
    },
    name:{
        color:Colors.black,
        alignSelf:'center',
        fontSize:32
    },
    container:{
        marginHorizontal:16
    },
    loading:{
        color:Colors.black,
        fontSize:24,
        alignSelf:'center',
        marginHorizontal:24,
        marginVertical:140,
        fontWeight:'bold'
    }
});


export default PlayerInfo;