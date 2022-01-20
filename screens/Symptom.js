import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Title, RadioButton, List, Modal, Provider, Portal } from 'react-native-paper'
import { Spinner, VStack, Cente, NativeBaseProvider, Center } from 'native-base'
import SymptomList from '../Api/SymptomList'
import Treatment_Diagnosis from '../Api/Treatment_Diagnosis'

const Symptom = () => {
    var femaleDiagnosis, leastConcerning
    const [value, setValue] = useState('female');
    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, height: 400, alignItems: 'center', textAlign: 'center' };
    const generatedData = { alignItems: 'center' }
    const [symptomId, setSymptomId] = useState();
    const [title, setTitle] = useState('');
    const [birthYear, setBirthYear] = useState('');


    const Pressable = (symptomId, title) => {
        console.log(symptomId, title, value, birthYear)
        setTitle(title)
        setSymptomId(symptomId);
    }






    return (
        <View style={styles.container}>
           
            <Image style={styles.img} source={require('../assets/icons/diagnose.png')}/>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            
            <TextInput placeholder={'BIRTH YEAR'} style={styles.input} onChangeText={(birthYear) => setBirthYear(birthYear)} />
            <List.Section>
                <List.Accordion
                    title="                SYMPTOM LIST"
                    left={props => <List.Icon {...props} icon="" />}
                    expanded={expanded}
                    onPress={handlePress}>


                    <ScrollView>
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

            <Title style={styles.title}>Gender</Title>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.groupCenter}>
                    <Title style={styles.titleGender}>male</Title>
                    <RadioButton value="male" />
                    <Title style={styles.titleGenderFemale}>female</Title>
                    <RadioButton value="female" />
                </View>
            </RadioButton.Group>

            <TouchableOpacity style={styles.button} onPress={showModal}>
                <Text style={styles.text}>SUBMIT</Text>
            </TouchableOpacity>


            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <View style={styles.diagnosisData}>

                        </View>
                        {
                            Treatment_Diagnosis.filter(userHealthData => userHealthData.tagId === symptomId)
                                .map(userHealthData =>
                                    <ScrollView horizontal={false} contentContainerStyle={generatedData}>                                     
                                        <Title style={styles.titleData}>Birth Year: {birthYear}</Title>
                                        <Title style={styles.titleData}>Gender: {value}</Title>
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
                                    </ScrollView>
                                )
                        }
                    </Modal>
                </Portal>
            </Provider>
           
        </View>
    )
}

export default Symptom

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 20
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
        display:'flex',
        flexDirection:'row',
       
        
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
        marginLeft:'25%'
        
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
    diagnosisData: {
        alignItems: 'center',
        textAlign: 'center'
    },
    titleData: {
        // justifyContent: 'center',
        fontWeight: 'bold',
        backgroundColor: "#fff"
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    img:{
        height:200
    }
})
