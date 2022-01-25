import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Card } from 'react-native-paper';

const Appointments = () => {
    const [getAge, setAge] = useState('');
    return (
        <View style={styles.container}>
            <Text></Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={{ color: '#FFF' }}>Select Date</Text>
            </TouchableOpacity>
            <View style={styles.group1}>
        <Card>
          <TouchableOpacity>
            <Text>09:00 AM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>09:30 AM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>10:00 AM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>10:30 AM</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={styles.group1}>
        <Card>
          <TouchableOpacity>
            <Text>12:00 PM</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.group2}>
          <TouchableOpacity>
            <Text>12:30 PM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>01:00 PM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>01:30 PM</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={styles.group3}>
        <Card>
          <TouchableOpacity>
            <Text>03:00 PM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>04:30 PM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>05:00 PM</Text>
          </TouchableOpacity>
        </Card>

        <Card>
          <TouchableOpacity>
            <Text>05:30 PM</Text>
          </TouchableOpacity>
        </Card>
      </View>

            <View>
                <Text style={{ fontWeight: 'bold' }}>Patient Details</Text>
                <TextInput
                    placeholder='Full name'
                    style={styles.inputText}
                    onChangeText={(text) => setFullName(fullName) }
                />
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
                        <TouchableOpacity>
                            <Image source={require('../assets/icon/drop-down-arrow.png')} style={styles.img} />
                        </TouchableOpacity>
                    
                

                <View style={styles.gender}>
                    <Text style={{fontWeight: 'bold'}}>Gender</Text>
                </View>

                <View style={styles.button}>
                    
                        <TouchableOpacity style={styles.btn1}>
                        <Text style={{ color: '#fff', paddingTop: 5 }}>Male</Text>
                        </TouchableOpacity>
                    
                    
                  
                    <TouchableOpacity style={styles.btn2}>
                    <Text style={{paddingTop: 5}}>Female</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
            <View style={styles.mainText}>
                <Text style={{fontWeight: 'bold'}}>Write your problem</Text>
                <TextInput placeholder="Write your problem" 
                    style={styles.input} 
                />
            </View>

        </View>
    )
}

export default Appointments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        padding: 8,
        left: 2,
    },
    btn: {
        margin: 10,
        borderRadius: 60,
        height: 40,
        width: 320,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    inputText: {
        marginTop: 20,
        borderRadius: 5,
        height: 50,
        width: 300,
        backgroundColor: '#EEEEEE',
        paddingLeft: 6,
    },
    img: {
        height: 15,
        width: 15,
        marginLeft: 10,
        marginTop: 5,
        right: -200
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 70,
        left: 6,
        marginTop: 5,
    },
    btn1: {
        backgroundColor: '#3E64FF',
        height: 50,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    btn2: {
        backgroundColor: '#EEEEEE',
        height: 50,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    mainText: {
        marginTop: 30,
    },
      input: {
        marginTop: 5,
        borderRadius: 5,
        height: 90,
        width: 300,
        backgroundColor: '#EEEEEE',
        paddingLeft: 10,
    },
      btnText: {color:"#fff"
    },
    gender: {
        marginTop: 20,
        left: 6,
    },
    group1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        borderColor: '#DDDDDD',
        height: 50,
        borderRadius: 13,
    },
      group2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        borderColor: '#DDDDDD',
        height: 50,
        borderRadius: 13,
    },
      group3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        borderColor: '#DDDDDD',
        height: 50,
        borderRadius: 13,
    },
    inputText: {
        marginTop: 10,
        borderRadius: 5,
        height: 50,
        width: 380,
        backgroundColor: '#EEEEEE',
        paddingLeft: 6,
    },
})
