import { ScrollView } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Alert } from 'react-native'
import { List, Title, TextInput, Provider, useTheme } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { db } from '../config/firebase';
import getUSER from '../config/user';

const Appointments = ({ route }) => {
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);
  const [time, setTime] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [message, setMesage] = useState("")
  const [date, setDate] = useState("")
  const ud = getUSER()

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    Alert.alert('Date selected');
    setDate(date)
    hideDatePicker();
  };

  const timeNine = () => {
    setTime('09:00AM :: 12:00AM')
    Alert.alert('Time Slected ' + '09:00AM :: 12:00AM')
    handlePress();
  }
  const timeTwelve = () => {
    setTime('12:00AM :: 15:00PM')
    Alert.alert('Time Slected ' + '12:00AM :: 15:00PM')
    handlePress();
  }
  const timeThree = () => {
    setTime('15:00PM :: 18:00PM')
    Alert.alert('Time Slected ' + '15:00PM :: 18:00PM')
    handlePress();
  }


  const addBooking = () => {
    db.collection("AppointmentBookings").doc(ud).collection("Booking").add(
      {
        Day: date,
        Time: time,
        Message: message,
        Doctor: route.params.Name,
        User: ud
      }
    ).then(() => {
      Alert.alert("Appointment Booked Successfully")
    }).catch()

    db.collection("DoctorsAppointments").doc(route.params.Email).collection("Booking").add(
      {
        Day: date,
        Time: time,
        Message: message,
        Doctor: route.params.Name,
        User: ud
      }
    ).then(() => {
      Alert.alert("Appointment Booked Successfully")
    }).catch()


  }

  const handleSubmitAppointment = () => {

    const mm = [date, time, message]
    if (mm[0] === "" || mm[1] === "" || message[2] === "") {
      Alert.alert(
        "Failed",
        "Date, Time, and Message need to be set befor appointment can be made",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      )
    } else {


      addBooking()
    }



  }


  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle='dark-content'
        hidden={false}
        translucent={false}
      />


      <TouchableOpacity style={styles.button} onPress={showDatePicker}>
        <Text style={styles.text}>SELECT DATE</Text>
      </TouchableOpacity>

      <List.Section>
        <List.Accordion
          title="SELECT TIME"
          left={props => <List.Icon {...props} icon="" />}
          expanded={expanded}
          onPress={handlePress}
        // style={styles.listHeight}
        >

          <TouchableOpacity onPress={timeNine}>
            <List.Item title='09:00AM :: 12:00AM' />
          </TouchableOpacity>

          <TouchableOpacity onPress={timeTwelve}>
            <List.Item title='12:00AM :: 15:00PM' />
          </TouchableOpacity>

          <TouchableOpacity onPress={timeThree}>
            <List.Item title='15:00PM :: 18:00PM' />
          </TouchableOpacity>

          <TouchableOpacity onPress={timeNine}>
            <List.Item title='21:00AM :: 22:00PM' />
          </TouchableOpacity>


        </List.Accordion>
      </List.Section>
      {
        time == "" ? <></> : <Title style={styles.message}>Selected Time: {time}</Title>
      }

      <Title style={styles.message}>Message</Title>
      <TextInput
        label="Message"
        value={message}
        onChangeText={(message) => setMesage(message)}
        style={styles.input}
        numberOfLines={10}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmitAppointment}>
        <Text style={styles.text}>SET APPOINTMENT</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

export default Appointments

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%'
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#3E64FF',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20
  },
  text: {
    alignSelf: 'center',
    color: '#fff',
  },
  listHeight: {
    height: 500
  },
  message: {
    alignSelf: 'center'
  },
  input: {
    height: '55%',
    width: '90%',
    alignSelf: 'center'
  }
})
