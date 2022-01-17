import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Vaccination from './screens/Vaccination';
import Doctors from './screens/Doctors';
import Doctor from './screens/Doctor'
import Appointments from './screens/Appointments';
import Symptom from './screens/Symptom';
import Donate from './screens/Donate';
import Messaging from './screens/Messaging';
import SOS from './screens/SOS';
import Contacts from './screens/Contacts';
import AddContacts from './screens/AddContacts';
import Maps from './screens/Maps';
import ResetPassword from './screens/ResetPassword';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Symptom" component={Symptom} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
