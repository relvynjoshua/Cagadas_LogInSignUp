import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import color from "../assets/colors";
import { TextInput } from "react-native-paper";

function SignupScreen(props) {
    console.log(props);

    const [showPass, setShowPass] = React.useState(false);
    const [showRePass, setShowRePass] = React.useState(false);

    return (
        <LinearGradient
        style={{flex: 1}} colors={[color.first, color.second]}>
            <View style={styles.container}>
                <Text style={styles.head}>Sign Up</Text>
                <Text style={styles.text}>hello there stranger!</Text>
            
            <TextInput
            style={styles.input}
            placeholder=''
            label='Name'
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Email'
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Enter Password'
            secureTextEntry={showPass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
                />
            }
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Retype Password'
            secureTextEntry={showRePass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowRePass(!showRePass)}
                />
            }
            />

            <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.btntext1}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => props.navigation.navigate('Landing')}>
                <Text style={styles.btntext2}>
                    Go Back
                </Text>
            </TouchableOpacity>
            
            </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        padding: 20,
        marginTop: 20,
    },
    head: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        fontSize: 50,
        color: 'white',
        textAlign: 'center',
        marginTop: 170,
        margin: 20,
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    button1: {
        backgroundColor: '#164863',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 100,
        marginRight: 100,
    },
    button2: {
        backgroundColor: '#9BBEC8',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 100,
        marginRight: 100,
    },
    btntext1: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    btntext2: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#164863',
        textAlign: 'center'
    },
    input: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderWidth: 3, 
        borderColor: '#9BBEC8', 
        borderRadius: 6,
        margin: 8,
        fontFamily: 'sans-serif',
        fontSize: 20, 
        backgroundColor: 'white',
    }
});

export default SignupScreen;