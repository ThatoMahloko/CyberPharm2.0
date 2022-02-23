import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import AssetExample from './AssetExample';
import Treatment_Diagnosis from '../Api/Treatment_Diagnosis';
import { Title } from 'react-native-paper';
const generatedData = { alignItems: 'center', paddingTop: 10 }

const RenderScreen = () => {
    let popupRef = React.createRef();

    const onShowPopup = () => {
        popupRef.show();
    };
    const onClosePopup = () => {
        popupRef.close();
    };


    const d = ((symptomId) => {

        console.log(Treatment_Diagnosis)
        return (
            Treatment_Diagnosis.filter(userHealthData => userHealthData.tagId === 238)
                .map(userHealthData =>
                    <ScrollView horizontal={false} contentContainerStyle={generatedData} style={styles.data}>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Diagnosis:</Title>
                        <Text style={styles.diagnosisData}>{userHealthData.leastConcerningDiagnosis}</Text>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Descrpition:</Title>
                        <Text style={styles.diagnosisData}>{userHealthData.leastConcerningDescription}</Text>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Least Concerning Specialist:</Title>
                        <Text style={styles.diagnosisData}>{userHealthData.leastConcerningSpecialist}</Text>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Diagnosis:</Title>
                        <Text style={styles.diagnosisData}>{userHealthData.mostConcerningDiagnosis}</Text>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Description:</Title>
                        <Text numberOfLines={6} style={styles.diagnosisData}>{userHealthData.mostConcerningDescription}</Text>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Most Concerning Specialist:</Title>
                        <Text style={styles.diagnosisData}>{userHealthData.mostConcerningSpecialist}</Text>
                        <Title style={styles.titleData} key={userHealthData.tagId}>Female Diagnosis:</Title>
                        <Text style={styles.diagnosisData}>{userHealthData.femaleDiagnosis}</Text>
                    </ScrollView>
                )
        )

    })

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <AssetExample
                    title="Results"
                    ref={(target) => (popupRef = target)}
                    onTouchOutside={onClosePopup}
                    d={d}
                />
                <View style={styles.button}>
                    <TouchableWithoutFeedback onPress={onShowPopup}  >
                        <Text style={styles.text}>CHECK SYMPTOMS</Text>
                    </TouchableWithoutFeedback>
                </View>

            </SafeAreaView>
        </>
    );
};

export default RenderScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#fff',
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
    },
    titleData: {
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginLeft: -50,
    },
    diagnosisData: {
        marginLeft: 2,
        width: '50%',
        marginRight: 70,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize:13,

    },
    data: {
        height: 280
    },
    descriptionData: {
        marginLeft: -30,
        width: 400,
        marginRight: -70,
        textAlign: 'center'
    }

});
