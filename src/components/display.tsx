import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center', 
        alignItems:'flex-end',
        backgroundColor: 'rgba(0,0,0,0.6)'

    },
    text:{
        fontSize:60,
        color:'#fff'
    }
})

const display = (props:any) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text} numberOfLines={1}>
                {props.valueDisplay}
            </Text>
            
        </View>
    )
}

export default display