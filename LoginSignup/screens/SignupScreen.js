import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import color from "../assets/colors";
import { TextInput } from "react-native-paper";
import fetchServices from '../services/fetchServices.js';

function SignupScreen({ navigation }) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repassword, setRepassword] = React.useState("");

    const [showPass, setShowPass] = React.useState(false);
    const [showRePass, setShowRePass] = React.useState(false);

    const [loading, setLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const showToast = (message = 'Something went wrong') => {
        ToastAndroid.show(message, 3000);
    };

    const handleRegistration = async () => {
        try{
            setLoading(true);
            if(name === '' || email === '' || password === '' || repassword === ''){
                showToast("Please input required data");
                setIsError(true);
                return false;
            }

            if(password !== repassword){
                showToast("Please match the password");
                setIsError(true);
                return false;
            }

            // url to be used for database, depends on pc or laptop
            // open postman to test, phpmyadmin to see data
            const url = 'http://192.168.1.16:8000/api/auth/register';
            const data = {
                name,
                email,
                password,
                repassword,
            };

            const result = await fetchServices.postData(url, data);
            if(result.message != null){
                showToast(result?.message);
                navigation.navigate('Login');   //no else bracket, together with navigate
            }
        }catch(e){
            showToast(e.toString());
        }finally{
            setLoading(false);
        }
    };

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
            value={name}
            onChangeText={setName}
            error={isError}
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Email'
            value={email}
            onChangeText={setEmail}
            error={isError}
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Enter Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowPass(!showPass)}
                />
            }
            error={isError}
            />
            <TextInput
            style={styles.input}
            placeholder=''
            label='Retype Password'
            value={repassword}
            onChangeText={setRepassword}
            secureTextEntry={!showRePass}
            right={
                <TextInput.Icon
                icon={!showPass ? "eye" : "eye-off"}
                onPress={() => setShowRePass(!showRePass)}
                />
            }
            error={isError}
            />

            <TouchableOpacity style={styles.button1} onPress={handleRegistration}>
                <Text style={styles.btntext1}>
                    Sign Up
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Landing')}>
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