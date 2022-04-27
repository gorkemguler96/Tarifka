import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flexDirection:"row",
        backgroundColor:'#ffa500',
        paddingLeft:10,
        paddingBottom:10,
        paddingRight:10,
        paddingTop:5,
    },
    inner_container:{
        flexDirection:"row",
        padding:10,
        backgroundColor:'white',
        flex:1,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        alignItems:"center",
    },
    image:{
        width:100,
        height:100,
        resizeMode:"contain",
    },
    category:{
        paddingLeft:10,
        fontSize:20,
    }
})
