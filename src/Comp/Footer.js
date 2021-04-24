import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text>© 2021 Group of Venture techlabs,LLC All Rights Reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    textAlign: "center",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    bottom: 0
  }
});

export default Footer;
