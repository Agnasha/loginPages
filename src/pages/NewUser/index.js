import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

import styles from './style.js';

export default function NewUser() {
    
    const navegation = useNavigation();
    
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    
    const onRegisterPress = () => {
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
                />

                </Animatable.View>
                <Animatable.View animation='fadeInLeft'delay={400}>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#696969"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                </Animatable.View>
                <Animatable.View animation='fadeInLeft'delay={300}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#696969"
                    secureTextEntry
                    placeholder='Senha'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                </Animatable.View>
                <Animatable.View animation='fadeInLeft'delay={200}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#696969"
                    secureTextEntry
                    placeholder='Confirme a Senha'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                </Animatable.View>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Cadastrar</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Já possui uma conta? <Text onPress={() => navegation.goBack()} style={styles.footerLink}>Entre</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}