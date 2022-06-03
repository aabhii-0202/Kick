import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountriesScreen from './Screens/CountriesScreen';
import FixturesScreen from './Screens/FixturesScreen';
import Leagues from './Screens/Leagues';
import {Colors} from './Components/Common/Colors';
import TabNavButton from './Components/Common/TabNavButton';
import PlayerSearch from './Screens/PlayerSearch';
import TeamSearch from './Screens/TeamSearch';
import LeagueFixtures from './Screens/LeagueFixtures';
import TeamInfo from './Screens/TeamInfo';
import FixtureDetails from './Screens/FixtureDetails';
import PlayerInfo from './Screens/PlayerInfo';

const App = () => {
  const Stack = createNativeStackNavigator();
   return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Leagues"
            component={Leagues}
            options={{headerShown: false
            }}
            />
            <Stack.Screen
            name="InsideLeagues"
            component={InsideLeagues}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="TeamInfo"
            component={TeamInfo}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="FixtureDetails"
            component={FixtureDetails}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="TeamInfo2"
            component={TeamInfo}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="PlayerInfo"
            component={PlayerInfo}
            options={{headerShown: false}}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen(){
  const Tab = createBottomTabNavigator();
  return(
      <Tab.Navigator
        screenOptions  ={{
          tabBarShowLabel:false,
          tabBarStyle:{
            height:50,
            backgroundColor:Colors.tabnavBG,
            paddingBottom:2,
            paddingTop:2,
            borderRadius:8,
            marginLeft:8,
            marginRight:8,
            marginBottom:8
          }
        }}
        >
          <Tab.Screen 
          name="Countries" 
          component={CountriesScreen} 
          options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabNavButton
                focused={focused}
                name='Countries'
                />
            )
          }}/>
          <Tab.Screen 
          name="Fixtures" 
          component={FixturesScreen} 
          options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabNavButton
                focused={focused}
                name='Fixtures'
                />
            )
            }}/>
            <Tab.Screen 
          name="TeamSearch" 
          component={TeamSearch} 
          initialParams={{id:id}}
          options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabNavButton
                focused={focused}
                name='Team'
                />
            )
            }}/>
      </Tab.Navigator>
  );
}

function InsideLeagues({route}){
  const Tab = createBottomTabNavigator();
  const {id} = route.params;
  return(
      <Tab.Navigator
      screenOptions  ={{
        tabBarShowLabel:false,
        tabBarStyle:{
          height:50,
          backgroundColor:Colors.tabnavBG,
          paddingBottom:2,
          paddingTop:2,
          borderRadius:8,
          marginLeft:8,
          marginRight:8,
          marginBottom:8
        }}}>
          <Tab.Screen 
          name="LeagueFixtures" 
          component={LeagueFixtures} 
          initialParams={{id:id}}
          options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabNavButton
                focused={focused}
                name='Fixtures'
              />
            )
            }}/>

          <Tab.Screen 
          name="PlayerSearch" 
          component={PlayerSearch} 
          initialParams={{id:id}}
          options={{
            headerShown: false,
            tabBarIcon:({focused})=>(
              <TabNavButton
                focused={focused}
                name='Player'
              />
            )
            }}/>
          
      </Tab.Navigator>
      );
}

export default App;