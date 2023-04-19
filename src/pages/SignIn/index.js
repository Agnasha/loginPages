import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import{} from '@expo/vector-icons';


export default function SignIn() {
    return (
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>

                <Text style={styles.massage}>Olá Bem vindo(a)</Text>
                <Text style={styles.text}></Text>

            </Animatable.View>


            <Animatable.View animation='fadeInUp' style={styles.containerForm}>

                <Text style={styles.title}>Usuario: </Text>
                <TextInput
                    placeholder='@Faminto'
                    style={styles.input}
                />

                <Text style={styles.title}>Senha:</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={ styles.buttonText}>Acessar</Text>

                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={ styles.registerText}>Não Possui uma conta? Cadastre-se </Text>

                </TouchableOpacity>
                

            </Animatable.View>

        </View>
    );
}
// Area de estilos 
const styles = StyleSheet.create({
    //Cor do fundo Texto inicial
    container: {

        flex:1,
        backgroundColor:'#ff8c00',
    },
    //COnfiguração Titulo inicial
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%',
    },
    massage:{
        fontSize:30,
        fontWeight: 'bold',
        color:'#fff',
    },
    //Começo de formulario
    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:25,
        marginTop:28,
        fontWeight: 'bold',
        color:'#ff8c00',
    },
    input:{
        borderBottomWidth:1,
        height: 40,
        marginBottom:12,
        fontSize:16,
        
    },
    button:{
        backgroundColor:'#ff8c00',
        width:'60%',
        borderRadius:4,
        paddingVertical:10,
        marginTop:18,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',

    },
    registerText:{
        color:'#a1a1a1',
    },
   





})