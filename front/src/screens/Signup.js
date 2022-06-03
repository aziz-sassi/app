import { React, useState } from 'react';
import login from './login';
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

export default function Signup({ navigation }) {
    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
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
                    <Input holder="Firstname" onChangeText={text => setFirstname(text)} />
                    <Input holder=" Lastname" onChangeText={text => setLastname(text)} />
                    <Input holder=" e-mail" onChangeText={text => setemail(text)} />
                    <Input holder=" Password" onChangeText={text => setpassword(text)} />
                    <Button title="Sign Up" onPress={() => {
                        axios.post("http://localhost:4000/users/singup", {
                            Firstname: Firstname,
                            Lastname: Lastname,
                            email: email,
                            password: password
                        })
                            .then((response) => {
                                console.log(response);
                                navigation.navigate('login')
                            })
                            .catch((error) => {
                            console.log(error)
                        })
                      
                    }
                    }
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