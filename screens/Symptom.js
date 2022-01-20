import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native'
import { Title, RadioButton, List, Modal, Provider, Portal } from 'react-native-paper'
import { Spinner, VStack, NativeBaseProvider, Center } from 'native-base'
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
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const [symptomId, setSymptomId] = useState();
    const [title, setTitle] = useState('');
    const [birthYear, setBirthYear] = useState('');


    const Pressable = (symptomId, title) => {
        console.log(symptomId, title, value, birthYear)
        setTitle(title)
        setSymptomId(symptomId);
    }






    return (


        <View style={styles.container}>  <StatusBar
            animated={false}
            barStyle='dark-content'
            hidden={false}
            translucent={false}
        />
            <Image style={styles.diagnose} source={require('../assets/icons/diagnose.png')} />
            <Title style={styles.title}>Birth Year</Title>
            <TextInput placeholder={'BIRTH YEAR'} style={styles.input} onChangeText={(birthYear) => setBirthYear(birthYear)} />

            <Title style={styles.title}>Symptom</Title>
            <List.Section>
                <List.Accordion
                    title="                SYMPTOM LIST"
                    left={props => <List.Icon {...props} icon="" />}
                    expanded={expanded}
                    onPress={handlePress}>


                    <ScrollView horizontal={false} style={styles.listHeight}>
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
                    <Title style={styles.titleGender}>Male</Title>
                    <RadioButton value="male" />
                    <Title style={styles.titleGender}>Female</Title>
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
                            <Image style={styles.diagnose} source={require('../assets/icons/diagnose.png')} />
                            <Title style={styles.titleData}>Birth Year: {birthYear}</Title>
                            <Title style={styles.titleData}>Gender: {value}</Title>
                        </View>
                        {
                            Treatment_Diagnosis.filter(userHealthData => userHealthData.tagId === symptomId)
                                .map(userHealthData =>
                                    <View style={styles.diagnosisData}>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Diagnosis:</Title>
                                        <Text >{userHealthData.leastConcerningDiagnosis}</Text>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Descrpition:</Title>
                                        <Text>{userHealthData.leastConcerningDescription}</Text>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Specialist:</Title>
                                        <Text>{userHealthData.leastConcerningSpecialist}</Text>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Diagnosis:</Title>
                                        <Text>{userHealthData.mostConcerningDiagnosis}</Text>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Description:</Title>
                                        <Text>{userHealthData.mostConcerningDescription}</Text>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Specialist:</Title>
                                        <Text>{userHealthData.mostConcerningSpecialist}</Text>
                                        <Title style={styles.titleData} key={userHealthData.tagId}>Female Diagnosis:</Title>
                                        <Text>{userHealthData.femaleDiagnosis}</Text>
                                    </View>
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
        justifyContent: 'center'
    },
    title: {
        alignSelf: 'center'
    },
    listHeight: {
        height: 100
    },
    titleGender: {
        color: '#3E64FF'
    },

    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    diagnosisData: {
        alignItems: 'center'
    },
    titleData: {
        justifyContent: 'center',
        fontWeight: 'bold',
        backgroundColor: "#fff"
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    diagnose: {
        height:300,
        width: 300,
        marginLeft: 20
    }
})
