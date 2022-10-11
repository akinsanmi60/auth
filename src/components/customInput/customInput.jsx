import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from "react";

const CustomInput = ({ value, setValue, placeholder, onBlur, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    input: {},
});
export default CustomInput;
