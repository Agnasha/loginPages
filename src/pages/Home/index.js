import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import styles from './style.js';
import * as Animatable from 'react-native-animatable';
import { auth } from '../../config/firebase.js'




export default function Home({ navigation }) {

    const usuario = auth.currentUser;

    const produtos = [
        {
            id: '001',
            desc: ['Sorvete', '25.00']
        },
        {
            id: '002',
            desc: ['Hamburguer', '50.00']
        },
        {
            id: '003',
            desc: ['Pizza Mussarela', '70.00']
        },
        {
            id: '004',
            desc: ['Açai', '25.00']
        },

    ]

    function deslogar() {
        auth.signOut();
        navigation.replace('SignIn')
    }

    return (
        <View style={styles.container}>




            <Animatable.View dalay={700} animation='fadeInUp' style={styles.containerForms}>

                <View style = {styles.logoUsuario}>
                <View style={styles.Logo}>
                    <Animatable.Image

                        animation='flipInY' dalay={700}
                        source={require('../../assets/logo.png')}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='contain'

                    />



                </View>
                <Text style={styles.text}>Usuário:  </Text><Text style={styles.text1}>{usuario.email}</Text>

                
                </View>
                
                <Text style={styles.title}>Produtos </Text>




                <View style={styles.containerNavbar}>
                    <FlatList
                        data={produtos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <View style={styles.item}><Text style={styles.prod}>{item.desc[0]}:   Valor: {item.desc[1]}</Text></View>}

                    />


                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => deslogar()}>

                    <Text style={styles.buttonText}>Sair </Text>
                </TouchableOpacity>





            </Animatable.View>



        </View>
    );




}