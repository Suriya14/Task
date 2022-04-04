import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import Register from './Screens/Register';
import Profile from './Screens/Profile';
import Post from './Screens/Post';
import Newsfeed from './Screens/Newsfeed';

const Stack = createNativeStackNavigator();



export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false }}>        
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false }}>        
        </Stack.Screen>
        <Stack.Screen
          name="Post"
          component={Post}
          options={{headerShown: false }}>        
        </Stack.Screen>
        <Stack.Screen
          name="Newsfeed"
          component={Newsfeed}
          options={{headerShown: false }}>        
        </Stack.Screen> 
        <Stack.Screen
          name="Profile"
          title="Profile"
          component={Profile}
          options={{headerShown:true,
            headerStyle: { backgroundColor: '#2a322a' },
            headerTintColor: 'white',
            headerTitleStyle:{color:'#FFFFFF'}
          }}>       
        </Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

