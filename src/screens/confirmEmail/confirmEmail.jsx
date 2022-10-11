import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from '@react-navigation/native';


const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    
    const navigation = useNavigation();

    const onSignInPress = () => {
        navigation.navigate('Login');
    };

    const onConfirmPressed = () => {
        navigation.navigate('Home');
    };

    const onResendPress = () => {
        console.warn('onResendPress');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>

                <CustomInput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                />

                <CustomButton text="Confirm" onPress={onConfirmPressed} />

                <CustomButton
                    text="Resend code"
                    onPress={onResendPress}
                    type="SECONDARY"
                />

                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
};

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
});
