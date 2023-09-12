import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton:{
        color: '#fff',
        backgroundColor:'#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width /4 ) * 2
    },buttonTriplo: {
        width: (Dimensions.get('window').width /4 ) * 3
    }

})

const Buttons = (props: any) => {

    const stylesButton:any = [styles.button] 
    if (props.label === '0' || props.label === 'AC'){stylesButton.push(styles.buttonDouble)}
    if (props.label === 'AC'){stylesButton.push(styles.buttonTriplo)}  
    if (props.color2) {stylesButton.push(styles.operationButton)} 

    return (
        <TouchableHighlight onPress={ () =>  props.onClick(props.label)}>
            <Text style={stylesButton}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}

export default Buttons