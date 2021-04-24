import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { About, Home, Login } from "./Comp";

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 20
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
