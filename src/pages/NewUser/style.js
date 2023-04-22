import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor:'#fff',
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        backgroundColor:'#ff8c00',
        
        borderRadius:100,
        flex: 2,
        height: 150,
        width: 150,
        alignSelf: "center",
        margin: 30,
        
    },
    input: {
        
        height: 50,
        borderRadius: 15,
        borderBottomWidth:1,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor:'#ff8c00',
        width:'60%',
        borderRadius:4,
        paddingVertical:10,
        marginTop:18,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#ff8c00",
        fontWeight: "bold",
        fontSize: 16
    }
})