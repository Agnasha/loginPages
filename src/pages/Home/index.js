import React from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style.js';

export default function Home({navegation}) {

  return (
    <View style={styles.container}>
      <Text>
        <Image 
        style={styles.logo}
        source={require('../../assets/logo.png')} />
      </Text>
      
      <Text style={styles.texto}>
        Você está no melhor app já criado nesse mundo!
      </Text>
       
      <TouchableOpacity
        style={styles.button}
        onPress={() => navegation.replace('SignIn')}>
        <Text style={styles.buttonTitle}>Sair</Text>

      </TouchableOpacity>
    </View>

  )




}