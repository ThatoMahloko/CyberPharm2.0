import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';
import { Title, Paragraph } from 'react-native-paper'

const url = 'https://sacoronavirus.co.za/evds/';

const Vaccination = () => {
    return (
        <View>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <Title style={styles.Title}>Why is vaccination important?</Title>

            <Paragraph style={styles.paragraph}>
                Vaccination is a safe and effective way to prevent disease and save lives. When we get
                vaccinated we are not just protecting ourselves, but also those around us. Some people,
                like those who are seriously ill, are advised not to get certain vaccines – so they depend
                on the rest of us to get vaccinated and help reduce the spread of disease.
            </Paragraph>

            <Title style={styles.Title}>Why is vaccination important?</Title>

            <Paragraph style={styles.paragraph}>
                Vaccines train your immune system to create antibodies, just as it does
                when it is exposed to a disease. When you get a vaccine, your immune
                system responds. by:
            </Paragraph>

            <View style={styles.info}>
                <View style={styles.infoText}>
                    <Image style={styles.syringIcon} source={require('../assets/icons/syringe.png')} />
                    <Paragraph style={styles.paragraph}>
                        produces antibodies. Antibodies are proteins produced naturally by
                        the immune system  {'\n'}to fight disease
                    </Paragraph>
                </View>

                <View style={styles.infoText}>
                    <Image style={styles.syringIcon} source={require('../assets/icons/syringe.png')} />
                    <Paragraph style={styles.paragraph}>
                        prodremembers the disease and how to fight  {'\n'}it. If you are then exposed to the germ
                        in the  {'\n'}future, your immune system can quickly  {'\n'}destroy it before you become unwell.
                    </Paragraph>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(url)}>
                <Text
                    style={styles.text}
                >
                    REGISTER FOR VACCINATION
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default Vaccination

const styles = StyleSheet.create({
    Title: {
        marginLeft: 16,
        fontSize: 30,
        marginTop: 20,

    },
    paragraph: {
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 10,

    },
    info: {
        flexDirection: 'column'
    },
    infoText: {
        flexDirection: 'row'
    },
    syringIcon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 5
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
        top: 20

    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    }
})
