import React, { useState } from 'react'
import { Text, Button, View } from 'react-native'
import estilo from './estilo'

export default comp => {
    // const Botao = () => {
    const[numero, setNumero] = useState(500)
    const[numero2, setNumero2] = useState(2)

    const inc = () => setNumero(numero + 25)
    const dec = () => setNumero(numero - 25)

    // const inc2 = () => setNumero2(numero2 * 2)
    // const dec2 = () => setNumero2(numero2 / 2) 

    return (
        <View>
            <>
            <Text style={estilo.FontGrande}>{numero}</Text>
            <Button title= "+" onPress={inc}
            color="#8B008B"/>
            <Button title= "-" onPress={dec}
            color="#8B008B"/>
        
        
            <View>
            <Text style={estilo.FontGrande}>{numero2}</Text>
            <Button title= "*" onPress={() => setNumero2(numero2 * 2)}
            color="#8B008B"/>
            <Button title= "/" onPress={() => setNumero2(numero2 / 2)}
            color="#8B008B"/>
            </View>
            </>
        </View>

    );  
};
