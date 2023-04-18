import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

//Biblioteca de animação. 
import * as Animatable from 'react-native-animatable';

import { useNavigation} from '@react-navigation/native';

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

            <Animatable.View dalay= {700} animation='fadeInUp' style= { styles.containerForms}>
                <Text style={styles.title}>Rapido, Pratico e Eficiente</Text>
                <Text style={styles.text}>Cadastre sua Empresa!</Text>
                

                <TouchableOpacity 
                    style={styles.button}
                    onPress={ () => navigation.navigate('SignIn')}>
                    
                    <Text style={styles.buttonText}>Cadastre-se </Text>
                </TouchableOpacity>


            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ff8c00'
    },
    containerLogo:{
        flex: 2,
        backgroundColor:'#ff8c00',
        justifyContent: "center",
        alignItems: "center",
        
    },
    containerForms:{
        flex: 1,
        backgroundColor:'#fff',       
        borderTopLeftRadius:25,
        borderTopRightRadius: 25,

        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        color:'#000',
        
        fontSize:25,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12,
    },
    text:{
        color:'#a1a1a1',
        marginTop:10,
        
    },
    button:{
        position:'absolute',
        backgroundColor:'#ff8c00',
        borderRadius:50,
        paddingVertical: 8,
        width:'50%',
        alignSelf: 'center',
        bottom:'15%',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',


    }
})