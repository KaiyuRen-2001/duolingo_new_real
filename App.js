import { StyleSheet, SafeAreaView, Text } from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./screens/authorization";
import CodeScreen from "./screens/code";
import LanguageScreen from "./screens/language";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="CodeScreen" component={CodeScreen} />
        <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
