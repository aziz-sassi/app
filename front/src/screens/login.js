import { React, useState } from 'react';
import Signup from './Signup';
import axios from "axios";

import {
    SafeAreaView,

    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Button
} from 'react-native';

import { Input } from '../components/utils';

export default function Login({ navigation }) {
    const [email, setemail] = useState("");
    const [password, setpassword] = setState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#b2dfdb' }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'android' ? null : "padding"}
            >
                <ScrollView style={{ flex: 1 }}
                >
                    <Image

                        source={require('../../assets/expo-bg1.png')}
                        style={styles.logoStyle} />
                    <Input holder="Please enter your e-mail!" onChangeText={text => setemail(text)} />
                    <Input holder="Please enter your password!" onChangeText={text => setpassword(text)} />
                    <Button title='login' onPress={() => {
                        axios.post("http://localhost:4000/users/login", {
                            email: email,
                            password: password
                        })
                            .then((response) => {
                                if (response.data === "Valid password") {
                                    console.log(response)
                                    navigation.navigate('MainTabs')
                                }

                            })
                            .catch((error) => {
                                console.log(error)
                            })

                    }}
                    />
                    <Button title="Sign Up" onPress={() =>
                        navigation.navigate('Signup')}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    logoStyle: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * .3,
        marginTop: 30,
        marginBottom: 50,
    },
})