import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function TodoItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={() => { onPress(item.key) }}>
            <View style={styles.todoItemBox}>
                <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todoItemBox: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#9b5de5",
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    }
})

export default TodoItem
