import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, StatusBar } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'
import { Icon } from 'react-native-elements'
import React from 'react'

const VaccineCertificate = () => {
    const url = "https://vaccine.certificate.health.gov.za/"

    const triggerCall = () => {
        Linking.openURL('tel:0800029999')
    };
    return (
        <ScrollView style={styles.body}>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <Title>
                Covid-19 Coronavirus Vaccination
                Certificate
            </Title>
            <Paragraph>
                The Vaccination certificate system is only accessible to
                the individuals who have recieved the COVID 19 Vaccine.
            </Paragraph>
            <Paragraph>
                Before you start you will need the following information with you:
            </Paragraph>

            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    Your RSA ID Number or Foreign Passport {"\n"}number or Asylum or Refugee number.
                    (Note {"\n"}this should be the same ID document number you presented when you got vaccinated)
                </Paragraph>
            </View>
            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    The cell phone with the number you included on your registration.
                </Paragraph>
            </View>
            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    Your vaccination code from the sms you received post vaccination.
                </Paragraph>
            </View>
            <Title>
                You must enter all the required details correctly.
            </Title>

            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    If one of the fields entered is wrong, the system will return an error message including
                    “details not found”. You can contact the : The COVID-19 Public Hotline: 0800 029 999 for assistance.
                </Paragraph>
            </View>
            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    The design of the Vaccination Certificate will be enhanced to ensure that it remains up to date with
                    local and international standards.
                </Paragraph>
            </View>
            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    You will therefore have to download your updated vaccination certificate for it to remain valid.
                </Paragraph>
            </View>
            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    The Department of Health will advise on the availability of newer versions of the COVID-19 Vaccination
                    certificate as it becomes available.
                </Paragraph>
            </View>
            <View style={styles.textGroup}>
                <Icon type='font-awesome' name='info-circle' style={styles.icon} />
                <Paragraph>
                    It is then the responsibility of a user to keep their COVID-19 vaccination certificate current by following
                    the communication released by the NDoH.
                </Paragraph>
            </View>
            <Title style={{ textAlign: 'center' }}>
                Enquiries: 0800 029 999 - COVID-19 Public Hotline
            </Title>

            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
                <Title style={styles.text}>Get Vaccination Certificate</Title>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={triggerCall}>
                <Title style={styles.text}>Call for Enquiries</Title>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default VaccineCertificate

const styles = StyleSheet.create({
    body: {
        margin: 20,
        marginTop: 40,
    }
    ,
    textGroup: {
        flexDirection: 'row',
        width: '95%',
        marginTop: 20
    },
    icon: {
        marginRight: 10
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