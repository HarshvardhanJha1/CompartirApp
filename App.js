import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import Colors from "./Components/constants/colors"
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from "react-native-vector-icons/FontAwesome5"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';

import Home from "./Components/Home Tab/Home"
import Pool from "./Components/Pool Tab/Pool"
import Group from "./Components/Group Tab/Group"
import Book from "./Components/Book Tab/Book"
import Profile from "./Components/Profile Tab/Profile"

import PooRequest from "./Components/Pool Tab/PoolRequest"
import PoolRequest from './Components/Pool Tab/PoolRequest';
import { ModalPortal } from 'react-native-modals';
import GroupChat from "./Components/Group Tab/GroupChat"
const Tab = createBottomTabNavigator();
const StackNavigator = createStackNavigator();

const tabs=[
  {
    name:'Home',
    icon:'home',
    component:Home
  },
  {
    name:'Pool',
    icon:'handshake',
    component:Pool
  },
  {
    name:'Book',
    icon:'car',
    component:Book
  },
  {
    name:'Groups',
    icon:'users',
    component:Group
  },
  {
    name:'Profile',
    icon:'user-circle',
    component:Profile
  },

]

export default function App() {
  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto.ttf'),
    RobotoBold:require('./assets/fonts/RobotoBold.ttf'),
    RobotoMedium:require('./assets/fonts/Roboto-Medium.ttf')
  });
  if (!loaded) {
    return null;
  }
  const createTabs = (initialRouteName) => {
    return (
      <Tab.Navigator

      tabBarOptions={{
        activeTintColor: Colors.red,
        inactiveTintColor: Colors.inactiveGray,
        style:{backgroundColor:Colors.tabBg,
          borderTopWidth:0
    }
      }}
        initialRouteName={initialRouteName}
        shifting={false}
                          >
          {tabs.map((item,index)=>{
            return(
              <Tab.Screen
              name={item.name}
              key={index}
              component={item.component}
              options={{
                tabBarLabel: item.name,
                tabBarIcon: ({color}) => (
                  <Icon name={item.icon} color={color} size={20}  style={{}}/>
                ),
              }}
            />
            )
          })}

        
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
        <StackNavigator.Navigator>

          <StackNavigator.Screen
            name="App"
            children={()=>createTabs("Home")}
            options={{headerShown: false}}
          />
          <StackNavigator.Screen
            name="PoolRequest"
            component={PoolRequest}
            options={{headerShown: false}}
          />
          <StackNavigator.Screen
            name="GroupChat"
            component={GroupChat}
            options={{headerShown: false}}
          />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

