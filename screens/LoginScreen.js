import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet,Text,TextInput,Touchable,TouchableOpacity,View } from 'react-native';

const LoginScreen=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

    const styles= StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
        },
        inputContainer:{
            width:'80%'
        },
        input:{
            backgroundColor:'white',
            paddingHorizontal:15,
            paddingVertical:10,
            marginTop:5,
            borderRadius:10
        },
        buttonContainer:{
            width:'60%',
            justifyContent:'center',
            alignItems:'center',
            marginTop:40
        },
        button:{
            backgroundColor:'#0782F9',
            width:'100%',
            padding:15,
            borderRadius:10,
            alignItems:'center'
        },
        buttonOutLine:{
            backgroundColor:'white',
            marginTop:5,
            borderColor:'#0782F9',
            borderWidth:2,
        },
        buttonOutLineText:{
            color:'#0782F9',
            fontWeight: "700",
            fontSize:16,
        },
        buttonText:{
            color:'white',
            fontWeight:"700",
            fontSize:16
        }
    })
    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder='Password'
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=>{ }}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text> 
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{ }}
                    style={[styles.button,styles.buttonOutLine]}
                >
                    <Text style={styles.buttonOutLineText}>Register</Text> 
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}
export default LoginScreen;