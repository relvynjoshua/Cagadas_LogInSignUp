import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import color from "../assets/colors";
import { TextInput } from "react-native-paper";

function LoginScreen(props) {
    console.log(props);

    const [showPass, setShowPass] = React.useState(false);

    return (
        <LinearGradient
        style={{flex: 1}} colors={[color.white, color.second]}>

        <View style={styles.container}>
            <Text style={styles.head}>Log In</Text>
            <Text style={styles.text}>welcome back!</Text>
            
            <TextInput
            style={styles.input}
            placeholder=''
            label='Email'
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Password'
            secureTextEntry={showPass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
                />
            }
            />

            <TouchableOpacity style={styles.button2} onPress={() => props.navigation.navigate('Recovery')}>
                <Text style={styles.btntext2}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate('Home')}>
                <Text style={styles.btntext1}>
                    Log In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => props.navigation.navigate('Landing')}>
                <Text style={styles.btntext2}>
                    Go Back
                </Text>
            </TouchableOpacity>
        </View>
        </LinearGradient>
    );
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
        color: 'black',
        textAlign: 'center',
        marginTop: 220,
        margin: 20,
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginBottom: 25,
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
        backgroundColor: '#427D9D',
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
        color: 'white',
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

export default LoginScreen;