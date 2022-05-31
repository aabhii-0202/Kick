import React from 'react';
import {View, Text,StyleSheet,Image,FlatList } from 'react-native';
import { Colors } from './Common/Colors';
import Detail from './Common/Detail';

const TeamLineup = ({
    route,
    // index,
    // lineup
}) => {

    const {index,lineup} = route.params;
   
     return (
        <View style={styles.parent}>
            <Image
            style={styles.image}
                source={{uri:lineup[index].team.logo}}
            />
            <Text 
                style={styles.name}
            >{lineup[index].team.name}</Text>
            <Image
            style={styles.image}
                source={{uri:lineup[index].coach.photo}}
            />
            <Text 
                style={styles.name}
            >{lineup[index].coach.name}</Text>

            <Text 
                style={styles.name}
            >Team</Text>
            
            <FlatList
                style={styles.flatlist}
                data={lineup[index].startXI}
                renderItem={({item,index})=>{
                    var i = index+1;
                    return (
                        <Detail
                            title={i}
                            value={item.player.name}
                        />
                    );
                }}
            />

            <Text 
                style={styles.name}
            >Substitutes</Text>
            <FlatList
                style={styles.flatlist}
                data={lineup[index].substitutes}
                renderItem={({item,index})=>{
                    var i = index+1;
                    return (
                        <Detail
                            title={i}
                            value={item.player.name}
                        />
                    );
                }}
            />
           
            
            
        </View>
    );
};


const styles = StyleSheet.create({
    parent:{
        borderRadius:8,
        borderColor:Colors.black,
        borderWidth:1,
        backgroundColor:Colors.white,
        marginHorizontal:16

    },
    image:{
        height:100,
        width:100,
        alignSelf: 'center',
        marginTop:16
    },name:{
        fontSize:24,
        color:Colors.black,
        alignSelf:'center',
        marginTop:16
    },
    flatlist:{
        margin:16
    }
});


export default TeamLineup;