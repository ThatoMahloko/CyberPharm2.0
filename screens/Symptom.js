import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Title, RadioButton, List, Modal, Provider, Portal, Card, Button } from 'react-native-paper'
import { Spinner, VStack, Cente, NativeBaseProvider, Center } from 'native-base'
import { Icon } from 'react-native-elements'
import SymptomList from '../Api/SymptomList'
import Treatment_Diagnosis from '../Api/Treatment_Diagnosis'
import { HiX } from "react-icons/hi";

const Symptom = () => {
    var femaleDiagnosis, leastConcerning
    const [popVisible, setPopVisible] = useState(false)
    const [value, setValue] = useState('female');
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, height: 400, alignItems: 'center', textAlign: 'center' };
    const generatedData = { alignItems: 'center' }
    const [symptomId, setSymptomId] = useState();
    const [title, setTitle] = useState('Select Symptom');
    const [birthYear, setBirthYear] = useState('');

    const Pressable = (symptomId, title) => {
        console.log(symptomId, title, value, birthYear)
        setTitle(title)
        setSymptomId(symptomId);
        setExpanded(false)
    }
    const display = () => {
        return (
            <TouchableOpacity style={styles.dialogClose} >
                <Image source={require('../assets/icon/dialogClose.png')} />
            </TouchableOpacity>
        )
    }
    const showPopHidePop = () => {
        if (title === "Select Symptom") {
            alert("⚠️Select Symptom⚠️")
        } else {

            if (popVisible === false) {
                setPopVisible(true)
            } else {
                setPopVisible(false)
            }
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={require('../assets/icons/diagnose.png')} />
            </View>
            <Title style={styles.titleData}>Self Dignosis</Title>

            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />

            <List.Section style={styles.lists}>
                <List.Accordion
                    title={title}
                    left={props => <List.Icon {...props} icon="" />}
                    expanded={expanded}
                    onPress={handlePress}>


                    <ScrollView
                        lView horizontal={false} style={styles.listHeight}>
                        {SymptomList.map((symptom) => {
                            return (
                                <TouchableOpacity onPress={() => Pressable(symptom.tagId, symptom.title)}>
                                    <List.Item key={symptom.tagId} title={symptom.title} />
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </List.Accordion>
            </List.Section>



            {
                popVisible === true ?
                    <></>
                    :
                    <TouchableOpacity style={styles.button} onPress={showPopHidePop}>
                        <Text style={styles.text}>SUBMIT</Text>
                    </TouchableOpacity>

            }
            <>
                {
                    popVisible === true ?
                        <ScrollView style={styles.popUpCard} horizontal={false}>
                            {display}

                            {
                                Treatment_Diagnosis.filter(userHealthData => userHealthData.tagId === symptomId)
                                    .map((userHealthData) => {
                                        return (
                                            <View key={userHealthData.tagId}>
                                                <View style={{marginLeft:200}}>
                                                    <Icon name='close' style={styles.buttonClose} onPress={showPopHidePop} />
                                                </View>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Diagnosis:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.leastConcerningDiagnosis}</Text>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Descrpition:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.leastConcerningDescription}</Text>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Specialist:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.leastConcerningSpecialist}</Text>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Diagnosis:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.mostConcerningDiagnosis}</Text>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Description:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.mostConcerningDescription}</Text>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Specialist:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.mostConcerningSpecialist}</Text>
                                                <Title style={styles.titleData} key={userHealthData.tagId}>Female Diagnosis:</Title>
                                                <Text style={styles.diagnosisData}>{userHealthData.femaleDiagnosis}</Text>
                                            </View>
                                        )
                                    })
                            }
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                            <Text styles={{ margin: 10, marginBottom: 50 }}></Text>
                        </ScrollView>
                        :
                        <></>
                }
            </>




        </View>
    )
}

export default Symptom

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 0,
        zIndex: -1,
        backgroundColor: '#F8F8FA'
    },
    input: {
        width: 342,
        height: 52,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        paddingLeft: 14,
        alignSelf: 'center',
        marginTop: 20
    },
    groupCenter: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',


    },
    title: {
        alignSelf: 'center'
    },
    listHeight: {
        height: 100
    },
    titleGender: {
        color: '#3E64FF',

    },
    titleGenderFemale: {
        color: '#3E64FF',
        marginLeft: '25%'
    },
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,

    },
    dialogClose: {
        width: 20,
        height: 20,
        left: 300
    },
    popUpCard: {
        height: '60%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        backgroundColor: 'white',
        paddingBottom: 100
    },
    diagnosisData: {
        alignItems: 'center',
        textAlign: 'center'
    },
    titleData: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    img: {
        height: 400,
        width: '100%',
        marginTop: 0
    },
    buttonClose: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 20,
        // left: 150

    }
})
