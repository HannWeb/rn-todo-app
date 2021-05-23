import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Button } from 'react-native'

function AddTodo({ onSubmit }) {

    const [text, setText] = useState("")

    const onChangeHandler = (value) => {
        setText(value)
    }

    const submitHandler = () => {
        onSubmit(text)
        setText("")
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What is Next?"
                value={text}
                onChangeText={onChangeHandler}

            />
            <Button title="Submit" color={"#9b5de5"} onPress={submitHandler} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    input: {
        marginBottom: 10,
        borderBottomColor: "#00bbf9",
        borderBottomWidth: 1
    }
})

export default AddTodo
