import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
  Picker,
  
} from 'react-native';
import { RadioButton, Title } from 'react-native-paper';

export default function Dates({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('null');
  const [selectedMonth, setSelectedMonth] = useState('null');
  const [getAge, setAge] = useState('');
  return (
    <SafeAreaView style={styles.container}>

        <View>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={{textAlign: 'center', color: '#fff', paddingTop:10}}>Select Date</Text>
          </TouchableOpacity>
        </View>
 

     

      <Text style={styles.time}>Available Time </Text>
      <View style={styles.times}>
        <View style={styles.time1}>
          <TouchableOpacity>
          <Text style={styles.t9}>09:00 AM</Text>
          </TouchableOpacity>
         
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>09:30 AM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>10:00 AM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>10:30 AM</Text>
        </TouchableOpacity>
          
        </View>
      </View>

      <View style={styles.times}>
        <View style={styles.time1}>
        <TouchableOpacity>
        <Text style={styles.t9}>12:00 AM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.t2}>
        <TouchableOpacity>
        <Text style={styles.t9}>12:30 AM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>13:30 PM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>14:00 PM</Text>
        </TouchableOpacity>
          
        </View>
      </View>

      <View style={styles.times}>
        <View style={styles.time1}>
        <TouchableOpacity>
        <Text style={styles.t9}>15:00 PM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>16:30 PM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>17:00 PM</Text>
        </TouchableOpacity>
          
        </View>
        <View style={styles.time2}>
        <TouchableOpacity>
        <Text style={styles.t9}>17:30 PM</Text>
        </TouchableOpacity>
          
        </View>
      </View>

      <Text style={styles.time}> Patient Details</Text>
      <Text style={styles.age}><b>Full Name</b></Text>
      <TextInput style={styles.input} placeholder="Full name" />

      <Text style={styles.age}><b>Age</b></Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: 250, borderRadius: 20, }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="20-25" value="20-25" />
        <Picker.Item label="26-30" value="26-30" />
        <Picker.Item label="31-40" value="31-40" />
        <Picker.Item label="26-30" value="26-30" />
      </Picker>

      <Text style={styles.age}><b>Gender</b></Text>
      <RadioButton.Group
        onValueChange={(newValue) => setAge(newValue)}
        value={getAge}>
          {/* <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
          <RadioButton value="High" />
          <Text style={{ paddingTop: '3%' }}>Male</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <RadioButton value="Medium" />
          <Text style={{ paddingTop: '3%' }}>Female</Text>
        </View>
          </View> */}
           <View style={styles.groupCenter}>
                    <Title style={styles.titleGender}>male</Title>
                    <RadioButton value="male" />
                    <Title style={styles.titleGenderFemale}>female</Title>
                    <RadioButton value="female" />
                </View>

    
      </RadioButton.Group>
      <Text style={styles.age}><b>Write your problem</b></Text>
      <TextInput style={styles.problem} placeholder="Write your problem" />
      <TouchableOpacity style={styles.btn}>
        <View style={styles.app}> Set Appointment</View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    bottom: 10,
  
  },
  // scrollContainer: {
  //   height: -200,
  // },
  cards: {
    flexDirection: 'row',
    marginTop: 20,
  },
  date: {
    marginLeft: 22,
    marginTop: 15,
    fontSize: 20,
  },
  titleGender: {
    color: '#3E64FF',

},
titleGenderFemale: {
    color: '#3E64FF',
    marginLeft: '25%'

},
  day: {
    marginLeft: 20,
    marginTop: 12,
    fontSize: 12,
  },
  groupCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',


},
  card1: {
    height: 90,
    border: '1px solid gray',
    width: 70,
  },
  card2: {
    height: 90,
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    width: 70,
    marginLeft: 10,
  },
  card3: {
    height: 90,
    border: '1px solid gray',
    width: 70,
    marginLeft: 10,
  },
  time: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
  },
  times: {
    flexDirection: 'row',
    marginTop: 12,
  },
  time1: {
    border: '1px solid gray',
    height: 30,
    fontSize: 15,
    width: 70,
  },
  t9: {
    marginTop: 5,
    marginLeft: 5,
    fontSize: 13,
  },
  time2: {
    border: '1px solid gray',
    height: 30,
    fontSize: 15,
    width: 70,
    marginLeft: 5,
  },
  t2: {
    height: 30,
    fontSize: 15,
    width: 70,
    marginLeft: 5,
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
  },
  input: {
    width: 250,
    height: 25,
    marginRight: 35,
    borderRadius: 20,
    paddingLeft: 15,
    border: '1px solid gray',
  },
  age: {
    marginTop: 10,
    marginLeft: 10
  },
  problem: {
    width: 250,
    height: 90,
    marginRight: 35,
    paddingLeft: 15,
    border: '1px solid gray',
    marginTop: 10
  },
  btn: {
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    width: 280,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  },
  app: {
    marginLeft: 90,
    marginTop: 5,
    color: 'white'
  },
  mainButton: {
    backgroundColor: 'background: rgba(5, 78, 222, 0.7);',
    width: 280,
    height: 40,
    borderRadius: 20,
    marginTop: 10
  },
});
