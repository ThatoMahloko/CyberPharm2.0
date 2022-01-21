import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native'
import { Title, Paragraph } from 'react-native-paper'

const url = 'https://sanbs.org.za/donation-process/';

const Donate = () => {
    return (
        <View>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <Title style={styles.Title}>Donation Process</Title>
            <Paragraph style={styles.paragraph}>
                Donating safe blood means you are committed to
                participating in a vital community service to
                improve the quality of life, for patients in need
                of blood transfusions.
                These measures include:
            </Paragraph>

            <View style={styles.info}>
                <View style={styles.infoText}>
                    <Image style={styles.syringIcon} source={require('../assets/icons/blood.png')} />
                    <Paragraph style={styles.paragraph}>
                    You will be required to complete a Donor Qestionnaire. The questions are aimed at {'\n'}assessing 
                    your health and lifestyle to  {'\n'}eliminate any effects that could pose a risk  {'\n'}to your health and
                    the health of a recipient.
                    </Paragraph>
                </View>

                <View style={styles.infoText}>
                    <Image style={styles.syringIcon} source={require('../assets/icons/blood.png')} />
                    <Paragraph style={styles.paragraph}>
                    This is followed by a one-on-one interview  {'\n'}with the nurse who goes through
                    the  {'\n'}questions to ensure that the questions are understood and that the donor 
                    understands  {'\n'}the importance of being honest on the  {'\n'}questionnaire
                    </Paragraph>
                </View>

                <View style={styles.infoText}>
                    <Image style={styles.syringIcon} source={require('../assets/icons/blood.png')} />
                    <Paragraph style={styles.paragraph}>
                    Your blood pressure and haemoglobin (iron)  {'\n'}levels are checked. (The
                        checking of your iron  {'\n'}level is done with a small prick to your
                        finger).
                    </Paragraph>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
                <Text style={styles.text}>DONATE BLOOD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Donate

const styles = StyleSheet.create({
    Title: {
        marginLeft: 16,
        fontSize: 30,
        marginTop: 20
    },
    paragraph: {
        alignSelf: 'center',
        marginTop: 20,
        marginLeft:10
    },
    info: {
        flexDirection: 'column'
    },
    infoText: {
        flexDirection: 'row'
    },
    syringIcon: {
        width: 25,
        height: 25, alignSelf: 'center',
        marginRight: 10, marginLeft: 10
    },
    button: {
        width: 360,
        height: 50,
        backgroundColor: '#3E64FF',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: -10,
        top:120
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    }
})
