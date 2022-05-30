import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Colors } from './Common/Colors';
import TeamWithName from './TeamWithName';

const FixtureComp = ({  
                        onclick,
                        logohome,
                        logoaway,
                        homename,
                        awayname,
                        homescore,
                        awayscore,
                        leaguename,
                        matchdatetime,    
                    }) => {

var Live = 'Live';

     return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onclick}>
                <View>
                <View style={styles.logocontainer}>
                    <TeamWithName
                        logo={logohome}
                        name={homename}
                        />
                    <View style={styles.textview}>
                    <Text style={styles.text}>
                        {homescore} - {awayscore}
                    </Text>
                    <Text style={styles.text}>
                        {Live}
                    </Text>

                    </View>
                    <TeamWithName
                        logo={logoaway}
                        name={awayname}
                        />
                </View>
                    <Text style={styles.baseline}>{leaguename} on {matchdatetime}</Text>
                </View>
            
            
            
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    touchable:{
        borderColor:Colors.black,
        borderRadius:8,
        borderWidth:1,
        marginHorizontal:16,
        backgroundColor:Colors.white,
        marginVertical:8

    },
    logocontainer:{
        flexDirection: 'row'
    },
    textview:{
        flex:1,
        marginTop:50,
    },
    text:{
        fontSize:24,
        flex:1,
        alignSelf: 'center',
        color:Colors.black,
        fontWeight:'bold'
    },
    baseline:{
        color:Colors.black,
        fontSize:16,
        alignSelf:'center',
        marginTop:4,
        marginBottom:8
    }
});


export default FixtureComp;