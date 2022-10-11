import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import SocialBtn from "../../components/sociaButtons/socialBtn";
import { useNavigation } from '@react-navigation/core';


const SignUpScreen = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();


  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  };

  const SignInPress = () => {
    navigation.navigate("Login");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>

        <Text
          style={styles.title}
        >
          Create account
        </Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword} secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat} secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialBtn />

        <CustomButton
          text="Have an account? Log in"
          onPress={SignInPress}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
  );
};


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

  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});


export default SignUpScreen;
