import { StyleSheet } from "react-native";

export default StyleSheet.create({
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