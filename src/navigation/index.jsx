import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
// screens
import SignUpScreen from "../screens/signup/signupscreen";
import Signscreen from "../screens/sigin/signscreen";
import ConfirmEmailScreen from "../screens/confirmEmail/confirmEmail";
import ForgotPasswordScreen from "../screens/forgotPassword/forgotPassword";
import NewPasswordScreen from "../screens/newPassword/newPassword";
import HomeScreen from "../screens/home";

const Stack = createNativeStackNavigator();

const NavigationIndex = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Signscreen} />
        <Stack.Screen name="Register" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationIndex;
