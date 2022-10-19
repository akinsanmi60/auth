import React from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";
import CustomInput from "../../components/customInput";
import CustomButton from "../../components/customButton";
import {useNavigation} from "@react-navigation/native";
import {useForm} from "react-hook-form";

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      code: "",
    },
  });
  const navigation = useNavigation();

  const onSignInPress = () => {
    navigation.navigate("Login");
  };

  const onConfirmPressed = () => {
    navigation.navigate("Login");
  };

  const onResendPress = () => {
    console.warn("onResendPress");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          name="code"
          control={control}
          rules={{
            required: "Code is reqired",
          }}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

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
