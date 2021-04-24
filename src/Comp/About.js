import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "./Footer";

const About = ({ navigation, route }) => {
  if (route.params.isLogin !== true) {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.about}>
      <View>
        <Text style={styles.header}>About</Text>
        <Button
          title="go back to Home Page"
          color="#000"
          onPress={() =>
            navigation.navigate("Home", {
              isLogin: route.params.isLogin
            })
          }
        />
        <View style={styles.logOutBtn}>
          <Button
            title="LogOut"
            color="#000"
            onPress={() =>
              navigation.navigate("Login", {
                isLogin: false
              })
            }
          />
        </View>
        <View style={styles.footerComp}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  header: {
    padding: 20,
    fontWeight: 900,
    fontSize: "3rem",
    textAlign: "center"
  },
  footerComp: {
    paddingTop: 20
  },
  logOutBtn: {
    paddingTop: 30
  }
});

export default About;
