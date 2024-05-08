import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function IntroSlide1({ navigation }) {
  const back = require("../assets/Streamlined_Communication.png");
  return (
    <View style={styles.container}>
      <Image
        source={back}
        style={[
          styles.backImg,
          { width: "80%", height: "30%", marginTop: "25%", left: 39 },
        ]}
      />

      <View style={styles.formContainer}>
        <Text style={styles.Text1}>Streamlined Communication</Text>
        <Text style={styles.Text2}>
          built-in messaging features that allow renters to communicate directly
          with landlords or property managers to ask questions, schedule
          viewings, and negotiate terms
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Role")}
          style={styles.Text3}
        >
          <Text style={styles.Text}>Next</Text>
          <Text style={styles.arrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E225C",
  },
  formContainer: {
    backgroundColor: "#FBFBFB",
    flex: 1,
    borderRadius: 20,
    padding: 20,
    position: "absolute",
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    alignItems: "center",
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: "5%",
    textAlign: "center",
  },
  Text2: {
    fontWeight: "200",
    fontSize: 18,
    marginTop: "10%",
    color: "#444444",
    textAlign: "center",
  },
  Text3: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#538DAD",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: 50,
    color: "#538DAD",
  },
  Text: {
    width: 200,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  arrow: {
    color: "white",
    right: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
