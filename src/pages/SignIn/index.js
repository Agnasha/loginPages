
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { logar } from '../../servicos/requisicoesFirebase.js';

import * as Animatable from 'react-native-animatable'
import { Ionicons } from '@expo/vector-icons';

import styles from './style.js'





export default function SignIn({ navigation }) {

    const [hidePass, setHidePass] = useState(true);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [statusError, setStatusError] = useState('');
    const [mensagemError, setMensagemError] = useState('');
    const [input,setInput] = useState('');



    async function realizarLogin() {

        if (email == '') {
            setMensagemError('O email é obrigatório!');
            setStatusError('email');
            Alert.alert(mensagemError);
        } else if (senha == '') {
            setMensagemError('A senha é obrigatória!');
            setStatusError('senha');
            Alert.alert(mensagemError);
        } else {
            const resultado = await logar(email, senha);
            if (resultado == 'erro') {
                setStatusError('firebase');
                setMensagemError('Email ou senha inválidos');
                Alert.alert(mensagemError);
            }
            else {
                navigation.replace('Home')
            }
        }
    }


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
                    value={email}
                    onChangeText={texto => setEmail(texto)}
                    error={statusError == 'email'}
                    mensageError={mensagemError}
                />

                <Text style={styles.title}>Senha:</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Digite sua senha'
                        style={styles.inputSenha}
                        value={senha}
                        onChangeText={(texto) => setSenha(texto)}
                        secureTextEntry={hidePass}
                        error={statusError == 'senha'}
                        mensagemError={mensagemError}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>
                        {hidePass ?
                            <Ionicons name='eye' color="#fff" size={25} />
                            :
                            <Ionicons name='eye-off' color="#fff" size={25} />
                        }
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => realizarLogin()}>
                    <Text style={styles.buttonText}>Acessar</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('NewUser')}>

                    <Text style={styles.registerText}>Não Possui uma conta? Cadastre-se </Text>

                </TouchableOpacity>


            </Animatable.View>

        </View>
    );

}
