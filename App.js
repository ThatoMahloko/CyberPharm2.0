import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
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
import ScanCard from './screens/ScanCard';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import FacilityInfo from './screens/FacilityInfo';
import AssetExample from './screens/AssetExample';
import RenderScreen from './screens/RenderScreen';
import Notifications from './screens/Notifications';
import BookDoctors from './components/BookDoctors';
import Facility from './components/Facility';
import DonateBlood from './components/DonateBlood'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DonateBlood" component={DonateBlood} />
      <Stack.Screen name="BookDoctors" component={BookDoctors} />
      <Stack.Screen name="Facility" component={Facility} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Vaccination" component={Vaccination} />
      <Stack.Screen name="Doctors" component={Doctors} />
      <Stack.Screen name="Doctor" component={Doctor} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="Donate" component={Donate} />
      <Stack.Screen name="Symptom" component={Symptom} />
      <Stack.Screen name="Messaging" component={Messaging} />
      <Stack.Screen name="SOS" component={SOS} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="AddContacts" component={AddContacts} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="ScanCard" component={ScanCard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="RenderScreen" component={RenderScreen} />
      <Stack.Screen name="FacilityInfo" component={FacilityInfo} />
      <Stack.Screen name="Notifications" component={Notifications} />
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
