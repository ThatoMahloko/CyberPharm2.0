import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import { Card } from 'react-native-paper';

const Appointments = () => {
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
                <Text style={{ marginTop: 30, paddingLeft: 6, fontWeight:'bold' }}>Age</Text>
                <Card style={styles.mainCard}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ marginTop: 10, left: 6, textAlign: 'center' }}>26-30</Text>
                        <TouchableOpacity>
                            <Image source={require('../assets/icon/drop-down-arrow.png')} style={styles.img} />
                        </TouchableOpacity>
                    </View>
                </Card>

                <View style={styles.gender}>
                    <Text style={{fontWeight: 'bold'}}>Gender</Text>
                </View>

                <View style={styles.card}>
                    <Card style={styles.card1}>
                        <TouchableOpacity>
                        <Text style={{ color: '#fff', paddingTop: 5 }}>Male</Text>
                        </TouchableOpacity>
                    </Card>
                    
                    <Card style={styles.card2}>
                    <TouchableOpacity>
                    <Text style={{paddingTop: 5}}>Female</Text>
                    </TouchableOpacity>
                    </Card>
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
        marginTop: 40,
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
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 70,
        left: 6,
        marginTop: 5,
    },
    card1: {
        backgroundColor: '#3E64FF',
        height: '150%',
        width: '30%',
        alignItems: 'center',
        borderRadius: 10,
    },
    card2: {
        backgroundColor: '#EEEEEE',
        height: '150%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },
    mainText: {
        marginTop: 40,
    },
      input: {
        marginTop: 5,
        borderRadius: 5,
        height: 200,
        width: 380,
        backgroundColor: '#EEEEEE',
        paddingLeft: 10,
        paddingBottom: 100,
    },
      btnText: {color:"#fff"
    },
    gender: {
        marginTop: 30,
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
        marginTop: 20,
        borderRadius: 5,
        height: 50,
        width: 380,
        backgroundColor: '#EEEEEE',
        paddingLeft: 6,
    },
})
