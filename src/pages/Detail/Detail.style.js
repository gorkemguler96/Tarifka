import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'#f3eded',
    },
    image:{
        width:Dimensions.get("window").width/1.055,
        height:Dimensions.get("window").height/3.5,
        borderRadius:5,
    },
    title:{
        fontWeight:"bold",
        color:'#a52a2a',
        fontSize:30,
    },
    country:{
        color:'#a52a2a',
        fontWeight:"bold",
        fontSize:20,
        borderBottomWidth:1,
        borderColor:'rgba(1,1,1,0.2)',
        paddingBottom:7,
    },
    text:{
        fontSize:16,
    },
    button:{
        backgroundColor:"red",
        borderRadius:4,
        marginTop:15
    },
    buttonText:{
        color:"white",
        textAlign:"center",
        padding:10,
        fontWeight:"bold",
        fontSize:17,
    }
})
