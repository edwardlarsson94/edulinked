import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "@/constants/Colors";

interface ButtonEduProps {
  title: string;
  colors: string[];
  type?: "primary" | "secondary";
}

export default function ButtonEdu({
  title,
  colors,
  type = "primary",
}: ButtonEduProps) {

  const getButtonStyles = () => {
    switch (type) {
      case "primary":
        return styles.primaryButton;
      case "secondary":
        return styles.secondaryButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyles = () => {
    switch (type) {
      case "primary":
        return styles.primaryText;
      case "secondary":
        return styles.secondaryText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={colors}
        style={[styles.loginButton,getButtonStyles()]}
      >
        <Text style={[styles.loginText, getTextStyles()]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  loginButton: {
    width: "100%",
    paddingTop: 12,
    paddingRight: 32,
    paddingBottom: 12,
    paddingLeft: 32,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 30,
  },
  primaryButton: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: Colors.light.title,
    borderStyle: 'solid',
  },
  loginText: {
    color: Colors.light.background,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "ManropeBold",
  },
  primaryText: {
    color: Colors.light.background,
  },
  secondaryText: {
    color: Colors.light.title,
  },
});
