import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import color from "../assets/colors";
import { TextInput } from "react-native-paper";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

function RecoveryScreen(props) {
    console.log(props);

    return (
        <LinearGradient style={{flex: 1}} colors={[color.first, color.third]}>
            <View style={styles.container}>
            <StatusBar backgroundColor={color.white} barStyle={"dark-content"}/>
                <View style={styles.header}>
                    <View style={styles.header1}>
                        <Text style={styles.logo}>.Clique</Text>
                    </View>
                    <View style={styles.header2}></View>
                </View>

                <View style={styles.main}>
                    <View style={styles.section1}>
                        <Text style={styles.head}>Recover your account</Text>
                        <Text style={styles.text}>a password reset will be sent to your email</Text>
                    </View>
                    <View style={styles.section2}>
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            label='Email'
                        />

                        <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate('Login')}>
                            <Text style={styles.btntext1}>Recover Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}></View>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    /* Container and Sections */
    container: {
        height: hp(100),
        backgroundColor: color.first,
    },
    header: {
        height: hp(10),
        display: 'flex',
        flexDirection: 'row',
    },
    header1: {
        width: wp(50),
        backgroundColor: color.white,
        justifyContent: 'center',
    },
    header2: {
        width: wp(50),
        backgroundColor: color.white,
        justifyContent: 'center',
    },
    main: {
        height: hp(80),
        backgroundColor: color.white,
    },
    section1: {
        height: hp(40),
        backgroundColor: color.first,
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    section2: {
        height: hp(40),
        backgroundColor: color.first,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    footer: {
        height: hp(10),
        backgroundColor: color.white,
    },

    /* Header */
    logo: {
        fontSize: hp(3.4),
        color: color.black,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: hp(2),
    }, 
    head: {
        fontSize: hp(4),
        color: color.black,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: hp(2),
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: hp(2),
        color: color.black,
        textAlign: 'center',
        margin: 10,
    },

    /* Body */
    input: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.2), 
        paddingVertical: 3,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: color.grey,
        backgroundColor: color.fifth,
        margin: 10,
        marginLeft: hp(2),
        marginRight: hp(2),
    },
    button1: {
        backgroundColor: color.white,
        borderRadius: 50,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: hp(1.6),
        marginLeft: 90,
        marginRight: 90,
    },
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.6),
        fontWeight: 'bold',
        color: color.black,
        textAlign: 'center'
    },
});

export default RecoveryScreen;