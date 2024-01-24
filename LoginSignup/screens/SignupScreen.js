import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, ToastAndroid,  } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import color from "../assets/colors";
import { TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.js';
import { useState } from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');

function SignupScreen({ navigation }) {
    const [showPass, setShowPass] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const handleSubmit = async ()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
                navigation.navigate('Login');
            }catch(err){
                console.log('got error', err.message);
            }
        }
    }
    return (
        <LinearGradient style={{flex: 1}} colors={[color.first, color.second]}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.header1}>
                        <Text style={styles.logo}>.Clique</Text>
                    </View>
                    <View style={styles.header2}>
                        <Text style={styles.head}>Sign Up</Text>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={styles.section1}>
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            label='Name'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            label='Email'
                            value={email}
                            onChangeText={value=> setEmail(value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            label='Enter Password'
                            secureTextEntry={!showPass}
                            right={
                            <TextInput.Icon
                            icon={!showPass ? "eye" : "eye-off"}
                            onPress={() => setShowPass(!showPass)}
                            />
                            }
                            value={password}
                            onChangeText={value=> setPassword(value)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder=''
                            label='Retype Password'
                            secureTextEntry={!showPass}
                            right={
                            <TextInput.Icon
                            icon={!showPass ? "eye" : "eye-off"}
                            onPress={() => setShowPass(!showPass)}
                            />
                            }
                            value={repassword}
                            onChangeText={value=> setRepassword(value)}
                        />
                    </View>

                    <View style={styles.section2}>
                        <TouchableOpacity style={styles.button1} onPress={handleSubmit}>
                            <Text style={styles.btntext1}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Landing')}>
                            <Text style={styles.btntext2}>
                                Go Back
                            </Text>
                        </TouchableOpacity></View>   
                    </View>

                <View style={styles.footer}></View>    
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    /* Container and Sections */
    container: {
        height: hp(100),
        backgroundColor: color.white,
    },
    header: {
        height: hp(10),
        display: 'flex',
        flexDirection: 'row',
    },
    header1: {
        width: wp(50),
        backgroundColor: color.first,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
    },
    header2: {
        width: wp(50),
        backgroundColor: color.first,
        justifyContent: 'center',
        borderBottomRightRadius: 20,
    },
    main: {
        height: hp(80),
        backgroundColor: color.white,
    },
    section1: {
        height: hp(55),
        backgroundColor: color.white,
        justifyContent: 'center',
    },
    section2: {
        height: hp(25),
        backgroundColor: color.white,
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
        fontSize: hp(3.4),
        color: color.white,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: hp(2),
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
        backgroundColor: color.first,
        borderRadius: 50,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: hp(1.6),
        marginLeft: 90,
        marginRight: 90,
    },
    button2: {
        backgroundColor: color.white,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 90,
        marginRight: 90,
        borderRadius: 10,
    },
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.6),
        fontWeight: 'bold',
        color: color.white,
        textAlign: 'center'
    },
    btntext2: {
        fontFamily: 'sans-serif',
        fontSize: hp(2.4),
        fontWeight: 'bold',
        color: color.black,
        textAlign: 'center'
    },
});

export default SignupScreen;