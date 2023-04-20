
import React,{ useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import{ Ionicons} from '@expo/vector-icons';

import styles from './style.js'


export default function SignIn() {

    const[input,setInput]= useState('');
    const[hidePass, setHidePass] = useState(true);





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

                <View style={styles.inputArea}>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.inputSenha}
                    value={input}
                    onChange={(texto)=> setInput(texto) }
                    secureTextEntry={hidePass}
                />
                <TouchableOpacity style={styles.icon} onPress={ () => setHidePass (!hidePass)}>
                 { hidePass ?
                    <Ionicons name='eye' color="#fff" size = {25}/>
                    :
                    <Ionicons name='eye-off' color="#fff" size = {25}/>
                 }
                    
                    

                </TouchableOpacity>
                </View>
                

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