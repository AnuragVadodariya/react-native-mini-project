import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import Footer from "./Footer";

const Login = ({ navigation }) => {
  const onSubmit = (values, { resetForm }) => {
    if (values.userName === "anurag" && values.Password === "Test@123") {
      resetForm();
      navigation.navigate("Home", { isLogin: true });
    } else {
      alert("wrong userName or Password");
    }
  };
  return (
    <Formik initialValues={{ userName: "", Password: "" }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.login}>
          <Text style={styles.headerText}>Login</Text>
          <View style={styles.inputGroup}>
            <Text>UserName : </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("userName")}
              onBlur={handleBlur("userName")}
              value={values.userName}
              placeholder="e.g. Anurag"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text>Password : </Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("Password")}
              onBlur={handleBlur("Password")}
              value={values.Password}
              placeholder="**********"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.btn}>
            <Button
              title="login"
              color="#000"
              style={styles.loginBtn}
              onPress={handleSubmit}
            />
          </View>
          <View>
            <Text style={styles.info}>
              UserName : anurag && Password : Test@123
            </Text>
          </View>
          <View style={styles.footerComp}>
            <Footer />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  login: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  headerText: {
    fontWeight: 900,
    fontSize: "3rem"
  },
  inputGroup: {
    paddingTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline"
  },
  input: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 6
  },
  btn: {
    marginTop: 30
  },
  loginBtn: {
    borderRadius: 6,
    padding: 3
  },
  info: {
    paddingTop: 20,
    fontSize: "1rem",
    fontWeight: 900
  },
  footerComp: {
    paddingTop: 20
  }
});

export default Login;
