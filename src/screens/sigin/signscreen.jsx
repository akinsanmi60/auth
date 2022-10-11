import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/Container.png";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import SocialBtn from "../../components/sociaButtons/socialBtn";


const Signscreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const SigInPress = () => {
    console.warn("Working")
  }

  const ForgotPress = () => {
    console.warn("Working")
  }

  const SignUpPress = () => {
    console.warn("Working")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.4 }]}
          resizeMode="contain"
        />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

        <CustomButton text="Sign in" onPress={SigInPress} />

        <CustomButton
          text="Forgot Password"
          onPress={ForgotPress}
          type="TERTIARY"
        />

        <SocialBtn />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={SignUpPress}
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
  logo: {
    width: '85%',
    maxWidth: 500,
    maxHeight: 250,
  },
});


export default Signscreen;
