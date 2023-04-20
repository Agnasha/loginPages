
import React,{ useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'
import{ Ionicons} from '@expo/vector-icons';


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
const styles = StyleSheet.create({
    //Cor do fundo Texto inicial
    container: {

        flex:1,
        backgroundColor:'#ff8c00',
    },
    //COnfiguração Titulo inicial
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%',
    },
    massage:{
        fontSize:30,
        fontWeight: 'bold',
        color:'#fff',
    },
    //Começo de formulario
    containerForm:{
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize:25,
        marginTop:28,
        fontWeight: 'bold',
        color:'#ff8c00',
    },
    //INPUT DE SENHA e EYE ICON

    inputArea:{
        flexDirection:'row',
        width:'100%',
        borderBottomWidth:1,
        borderRadius:15,
        height:50,
        alignItems:'center',

    },
    inputSenha:{
        width:'85%',
        height:60,
        color:"#000",
        padding:18,
        fontSize:16,

    },
    icon:{
        width:'15%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ff8c00',        
        borderBottomWidth:1,
    },

    input:{
        
        borderRadius:15,
        borderBottomWidth:1,
        height:50,
        padding:18,
        marginBottom:12,
        fontSize:16,
        
    },
    button:{
        backgroundColor:'#ff8c00',
        width:'60%',
        borderRadius:4,
        paddingVertical:10,
        marginTop:18,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold',
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',

    },
    registerText:{
        color:'#a1a1a1',
    },
   





})