import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
      color:'#2e2e2d',
      
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