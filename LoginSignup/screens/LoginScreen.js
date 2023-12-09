import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import {LinearGradient} from "expo-linear-gradient";
import color from "../assets/colors";
import { TextInput } from "react-native-paper";
import fetchServices from '../services/fetchServices.js';

function LoginScreen({ navigation }) {

    const [showPass, setShowPass] = React.useState(false);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errors, setErrors] = React.useState("");
    const [loading, setLoading] = React.useState("");

    const showToast = (message = 'Something went wrong') => {
        ToastAndroid.show(message, 3000)
    };

    const handleLogin = async () => {
        try{
            setLoading(true);
            if(email === ""){
                setErrors({ email: true});
                return false;
            }
            if(password === ""){
                setErrors({ password: true});
                return false;
            }

            // url to be used for database, depends on pc or laptop
            // open postman to test, phpmyadmin to see data
            const url = 'http://192.168.1.16:8000/api/auth/login';
            const data = {
                email,
                password,
            };

            const result = await fetchServices.postData(url, data);
            console.debug(result);
            if(result.message != null){
                showToast(result?.message);
                navigation.navigate("Home");    //no else bracket, together with navigate
            }
        }catch (e) {
            console.debug(e.toString());
        }finally{
            setLoading(false);
        }
    };

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
            value={email}
            onChangeText={setEmail}
            error={errors?.email}
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Password'
            secureTextEntry={!showPass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
                />
            }
            value={password}
            onChangeText={setPassword}
            error={errors?.password}
            />

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Recovery')}>
                <Text style={styles.btntext2}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={handleLogin}>
                <Text style={styles.btntext1}>
                    Log In
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Landing')}>
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