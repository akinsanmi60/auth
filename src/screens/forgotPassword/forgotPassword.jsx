import {StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      username: "",
    },
  });
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate("NewPassword");
  };

  const onSignInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot your password</Text>

        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{
            required: "Username is reqired",
          }}
        />

        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
});
