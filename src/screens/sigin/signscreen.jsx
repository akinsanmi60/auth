import React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import Logo from "../../../assets/images/World-Map.png";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import SocialBtn from "../../components/sociaButtons/socialBtn";
import { useNavigation } from '@react-navigation/native';


const Signscreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation();

  const SigInPress = () => {
    navigation.navigate('Home')
    console.warn("Working")
  }

  const ForgotPress = () => {
    navigation.navigate("ForgotPassword")
  }

  const SignUpPress = () => {
    navigation.navigate("Register")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

        <CustomButton text="Log In" onPress={SigInPress} />

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
    marginTop: 12,
    width: '90%',
    maxWidth: 500,
    maxHeight: 400,
  },
});


export default Signscreen;
