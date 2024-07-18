/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 */
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Appearance, useColorScheme } from "react-native";
import * as Screens from "../screens";
import { HomeNavigator } from "./HomeNavigator";
import { StatusBar } from "expo-status-bar";
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import FuelScreen from "../screens/FuelScreen";
import ForceScreen from "../screens/ForceScreen";
import JoinSocialsScreen from "../screens/JoinSocialsScreen";
import DailyTaskScreen from "../screens/DailyTaskScreen";
import Web3PassScreen from "../screens/Web3PassScreen";
import RanksScreen from "../screens/RanksScreen";
import SagaScreen from "../screens/SagaScreen";
import TeamScreen from "../screens/TeamScreen";
import BottomTabNavigation from "../components/global/BottomTabNavigation";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 *
 */

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Auth: undefined;
  Fuel: undefined;
  Force: undefined;
  JoinSocials: undefined;
  DailyTask: undefined;
  Web3Pass: undefined;
  Ranks: undefined;
  Saga: undefined;
  Team: undefined;
  // 🔥 Your screens go here
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Auth"}>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Fuel"
        component={FuelScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Force"
        component={ForceScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JoinSocials"
        component={JoinSocialsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DailyTask"
        component={DailyTaskScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Web3Pass"
        component={Web3PassScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ranks"
        component={RanksScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Saga"
        component={SagaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Team"
        component={TeamScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Settings" component={Screens.SettingsScreen} />
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
    },
  };

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme}
      {...props}
    >
      <StatusBar />
      <AppStack />
    </NavigationContainer>
  );
};
