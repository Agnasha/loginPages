import React, { useState, useEffect } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js';
import { cadastrar } from '../../servicos/requisicoesFirebase.js';

export default function NewUser({ navigation }) {

    const navegation = useNavigation();

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmaSenha, setConfirmaSenha] = useState('')

    async function realizarCadastro() {

        const resultado = await cadastrar(email, senha, confirmaSenha);
        if (resultado == "sucesso") {
            Alert.alert('Usuário cadastrado com sucesso!');
            setFullName('')
            setEmail('')
            setSenha('')
            setConfirmaSenha('')
        } else {
            Alert.alert(resultado);
        }

    }


    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Nome Completo'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"

                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Senha'
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirme a Senha'
                    onChangeText={(text) => setConfirmaSenha(text)}
                    value={confirmaSenha}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
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