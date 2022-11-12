import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from "react-native";

import React, { useState } from 'react'

export function Home() {

    const [message, setMessage] = useState()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo!</Text>
            <TextInput style={styles.input} placeholder="Digite algo" placeholderTextColor="RGB(142, 126, 196)" onChangeText={setMessage}/>

            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginTop: 50 }]}>{message}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 60
    },
    title: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#ffffff',
        fontSize: 18,
        padding: Platform.OS === 'android' ? 15 : 20,
        marginTop: 20,
        borderRadius: 7,
    },
    button: {
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        color: '#1F1E25',
        fontSize: 18,
        fontWeight: 'bold'
    }
});