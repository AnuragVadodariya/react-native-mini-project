import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Footer from "./Footer";

const Home = ({ navigation, route }) => {
  if (route.params.isLogin !== true) {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.home}>
      <View>
        <Text style={styles.header}>Home</Text>
        <Button
          title="go to about Page"
          color="#000"
          onPress={() =>
            navigation.navigate("About", {
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
  home: {
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

export default Home;
