import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountriesScreen from './Screens/CountriesScreen';
import FixturesScreen from './Screens/FixturesScreen';
import Leagues from './Screens/Leagues';
import {Colors} from './Components/Common/Colors';
import {View ,Text} from 'react-native';
import TabNavButton from './Components/Common/TabNavButton';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen(){
  const Tab = createBottomTabNavigator();
  return(<NavigationContainer independent={true}>
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
          component={CountriesContinues} 
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
                name='Leagues'
                />
            )
            }}/>
      </Tab.Navigator>
    </NavigationContainer>);
}

function CountriesContinues(){
  const Stack = createNativeStackNavigator();
  return(
      <Stack.Navigator>
          <Stack.Screen
          name="CountriesScreen"
          component={CountriesScreen}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name="Leagues"
          component={Leagues}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name="InsideLeagues"
          component={InsideLeagues}
          options={{headerShown: false}}
          />
    </Stack.Navigator>);
}

function InsideLeagues(){
  const Tab = createBottomTabNavigator();
  return(<NavigationContainer independent={true}>
      <Tab.Navigator>
          <Tab.Screen 
          name="Countries" 
          component={CountriesContinues} 
          options={{headerShown: false}}/>
          <Tab.Screen 
          name="Fixtures" 
          component={FixturesScreen} 
          options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>);
}



export default App;