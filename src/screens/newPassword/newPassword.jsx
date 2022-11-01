import React from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const NewPasswordScreen = () => {
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {
      code: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const pwdValidate = watch("newPassword");
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate("Home");
  };

  const onSignInPress = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{
            required: "Code is reqired",
            maxLength: {
              value: 5,
              message: "code is 5 character long",
            },
          }}
        />

        <CustomInput
          placeholder="New Password"
          name="newPassword"
          control={control}
          secureTextEntry
          rules={{
            required: "New Password is required",
            minLength: {
              value: 8,
              message: "New Password should be at least 8 characters long",
            },
          }}
        />

        <CustomInput
          control={control}
          placeholder="Confirm Password"
          name="confirmPassword"
          secureTextEntry
          rules={{
            validate: value => value === pwdValidate || "Password do not match",
          }}
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default NewPasswordScreen;
