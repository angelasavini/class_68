import React,{Component}from "react"
import {View, Text, StyleSheet} from "react-native"
export default class TransactionScreen extends Component {
render (){
    return(
        <View style = {styles.container} >
        <Text style = {styles.text} >transaction screen</Text>
        </View>
    )
    
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor : "#5653d4"
    },
    text: {
        color: " #ffffff",
        fontSize:30,

    }
})