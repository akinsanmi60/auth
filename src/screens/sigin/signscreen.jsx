import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../../../assets/images/World-Map.png";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import SocialBtn from "../../components/sociaButtons/socialBtn";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Signscreen = () => {
  const {height} = useWindowDimensions();
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigation = useNavigation();

  const SigInPress = () => {
    navigation.navigate("Home");
  };

  const ForgotPress = () => {
    navigation.navigate("ForgotPassword");
  };

  const SignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is reqired",
            pattern: {value: EMAIL_REGEX, message: "Email is invalid"},
          }}
        />

        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />

        <CustomButton text="Log In" onPress={handleSubmit(SigInPress)} />

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
    alignItems: "center",
    padding: 20,
  },
  logo: {
    marginTop: 12,
    width: "90%",
    maxWidth: 500,
    maxHeight: 400,
  },
});

export default Signscreen;
