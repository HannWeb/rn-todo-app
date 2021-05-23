import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Header() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.text}> MY TODOS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00bbf9",
        height: 60,
    },
    text: {
        height: "100%",
        textAlign: "center",
        textAlignVertical: "center",
        color: "#f4f1de",
        fontSize: 20,
        fontWeight: "bold",
    }
})

export default Header
