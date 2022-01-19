import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Title, RadioButton, List, Modal, Provider, Portal } from 'react-native-paper'
import { Spinner, VStack, NativeBaseProvider, Center } from 'native-base'
import SymptomList from '../Api/SymptomList'
import Treatment_Diagnosis from '../Api/Treatment_Diagnosis'

const Symptom = () => {
    const [value, setValue] = useState('female');
    const [expanded, setExpanded] = useState(false);

    const handlePress = () => setExpanded(!expanded);

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    const [symptomId, setSymptomId] = useState('');
    const [title, setTitle] = useState('');
    const [birthYear, setBirthYear] = useState('');


    const Pressable = (symptomId, title) => {
        console.log(symptomId, title, value, birthYear)
        setTitle(title)
        setSymptomId(symptomId);
    }


    return (
        <View style={styles.container}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
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
                    <Title style={styles.titleGender}>male</Title>
                    <RadioButton value="male" />
                    <Title style={styles.titleGender}>female</Title>
                    <RadioButton value="female" />
                </View>
            </RadioButton.Group>

            <TouchableOpacity style={styles.button} onPress={showModal}>
                <Text style={styles.text}>SUBMIT</Text>
            </TouchableOpacity>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <NativeBaseProvider>
                            <Center>
                                <VStack alignItems="center">
                                    <Spinner size="lg" color="emerald.500" />
                                </VStack>
                            </Center>
                        </NativeBaseProvider>
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
        marginTop: 60
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
    text: {
        alignSelf: 'center',
        color: '#fff',
    }
})
