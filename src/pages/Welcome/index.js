import React from 'react';
import { 
    View, 
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import styles from './style.js';

//Biblioteca de animação. 
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
         <View style={ styles.container}>
            <View style={ styles.containerLogo}>
                <Animatable.Image
                   animation='flipInY'
                   source={require('../../assets/logo.png')}
                   style={{ width:'100%'}}
                   resizeMode='contain'
                />
            </View>

            <Animatable.View dalay= {700} animation='fadeInUp' style= { styles.containerForms }>
                <Text style={styles.title}>O mais Rapido, Pratico e Eficiente!</Text>
                <Text style={styles.text}>Como esta sua fome hoje?</Text>
                

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}>
                    
                    <Text style={styles.buttonText}>Acesse </Text>
                </TouchableOpacity>


            </Animatable.View>
            
        </View>
    );
}
