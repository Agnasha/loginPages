import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
      flex: 1,
      
      justifyContent: "center",
      backgroundColor:'#ff8c00'
  },
  containerNavbar:{
    backgroundColor:'#ff8c00',
    borderRadius:30,
    padding:10,
    marginTop:5,
    marginVertical:5,
    

  },
  item:{
    backgroundColor:'#fff',
    padding:15,
    marginVertical:6,
    borderRadius:20,
  },
  prod:{
    fontSize:15,
    color:'#000',
    borderRadius:20,

  },
  Logo:{

    height:100,
    width:100,
    
    backgroundColor:'#ff8c00', 
    borderRadius:100,
      
  },
  containerForms:{//flatlist
      flex: 1,
      backgroundColor:'#fff',       
      borderTopLeftRadius:25,
      borderTopRightRadius: 25,
      paddingStart: '5%',
      paddingEnd: '5%',
  },
  title:{
      color:'#000',
      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginTop:28,
      marginBottom:12,
  },
  text:{
      color:'#ff8c00',
      fontWeight:'bold',
      fontSize:20,
      marginTop:10,
      marginBottom:5,
      
  },
  text1:{
    color:'#000',
    fontSize:20,
    marginBottom:10,
    
},
  button:{
      position:'absolute',
      backgroundColor:'#ff8c00',
      borderRadius:50,
      paddingVertical: 8,
      width:'30%',
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