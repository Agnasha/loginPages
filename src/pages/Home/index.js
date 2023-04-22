import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style.js';
import * as Animatable from 'react-native-animatable';
import { auth } from '../../config/firebase.js'

export default function Home({ navigation }) {

    const usuario = auth.currentUser;

    function deslogar() {
        auth.signOut();
        navigation.replace('SignIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation='flipInY'
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View dalay={700} animation='fadeInUp' style={styles.containerForms}>
                <Text style={styles.title}>Você está no melhor app já criado nesse mundo!</Text>
                <Text style={styles.text}>Usuário: {usuario.email} </Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => deslogar()}>

                    <Text style={styles.buttonText}>Sair </Text>
                </TouchableOpacity>


            </Animatable.View>

        </View>
    );




}