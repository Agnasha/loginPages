import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

import styles from './style.js';
import { cadastrar } from '../../servicos/requisicoesFirebase.js';

export default function NewUser({ navigation }) {

    const navegation = useNavigation();

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')
    const [statusError, setStatusError] = useState('');
    const [mensagemError, setMensagemError] = useState('');

    async function realizarCadastro() {

        if (email == '') {
            setMensagemError('Preencha com seu email');
            setStatusError('email');
            Alert.alert(mensagemError);
        } else if (senha == '') {
            setMensagemError('Digite sua senha');
            setStatusError('senha');
            Alert.alert(mensagemError);
        } else if (confirmaSenha == '') {
            setMensagemError('Confirme sua senha');
            setStatusError('confirmaSenha');
            Alert.alert(mensagemError);
        } else if (confirmaSenha != senha) {
            setMensagemError('As senhas não conferem!');
            setStatusError('confirmaSenha');
            Alert.alert(mensagemError);
        } else if (fullName == '') {
            setMensagemError('Digite seu nome completo');
            setStatusError('fullName');
            Alert.alert(mensagemError);
        } else {
            const resultado = await cadastrar(email, senha);
            setStatusError('firebase')
            if (resultado == "sucesso") {
                Alert.alert('Usuário cadastrado com sucesso!');
                setFullName('')
                setEmail('')
                setSenha('')
                setConfirmaSenha('')
                navigation.replace('SignIn')
            } else {
                Alert.alert(resultado);
            }
        }
    }


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">

                <Animatable.View animation='flipInY'>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/logo.png')}
                    />
                </Animatable.View>

                <Animatable.View animation='fadeInLeft' delay={500}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome Completo'
                        placeholderTextColor="#696969"
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        error={statusError == 'fullName'}
                        mensagemError={mensagemError}

                    />

                </Animatable.View>
                <Animatable.View animation='fadeInLeft' delay={400}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        placeholderTextColor="#696969"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        error={statusError == 'email'}
                        mensagemError={mensagemError}
                    />

                </Animatable.View>
                <Animatable.View animation='fadeInLeft' delay={300}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#696969"
                        secureTextEntry
                        placeholder='Senha'
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        error={statusError == 'senha'}
                        mensagemError={mensagemError}
                    />

                </Animatable.View>
                <Animatable.View animation='fadeInLeft' delay={200}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#696969"
                        secureTextEntry
                        placeholder='Confirme a Senha'
                        onChangeText={(text) => setConfirmaSenha(text)}
                        value={confirmaSenha}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        error={statusError == 'confirmaSenha'}
                        mensagemError={mensagemError}
                    />

                </Animatable.View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => realizarCadastro()}>
                    <Text style={styles.buttonTitle}>Cadastrar</Text>
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Já possui uma conta? <Text onPress={() => navegation.goBack()} style={styles.footerLink}>Entre</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}