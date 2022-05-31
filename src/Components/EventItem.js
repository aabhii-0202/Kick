import React from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import { Colors } from './Common/Colors';
import Detail from './Common/Detail';


const EventItem = ({
    url,
    name,
    timeelapsed,
    extratime,
    playername,
    asistname,
    type,
    detail
                    
}) => {


     return (
        <View style={styles.parentView}>
            <View style={styles.header}>
                <Image 
                    style={{height:50,width:50}}
                    source={{uri:url}}
                    />
                <Text style={styles.name}>{name}</Text>
            </View>
            <Detail
                title='Time Elapsed'
                value={timeelapsed}
            />
            <Detail
                title='Extra Time'
                value={extratime}
            />
            <Detail
                title='Player Name'
                value={playername}
            />
            <Detail
                title='Assisted by'
                value={asistname}
            />
            <Detail
                title='Type'
                value={type}
            />
            <Detail
                title='Details'
                value={detail}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    parentView:{
        borderRadius:8,
        borderWidth:1,
        borderColor:Colors.black,
        backgroundColor:Colors.white,
        padding:16,
        marginHorizontal:16,
        marginVertical:16
    },
    header:{
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:16
    },
    name:{
        color:Colors.black,
        fontSize:24,
        fontWeight:'bold',
        alignSelf: 'center',
        textAlign:'center',
        marginStart:16
    },

});


export default EventItem;