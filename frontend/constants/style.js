import { StyleSheet } from "react-native";

export const Colors = {
  primaryAlpha: "#447a7a7c",
  background: "#D9D9D9",
  primary500: "#447A7A",
  white: "#F8F1FF",
  accentColor: "#5DA4A4",
  buttonRipple: "#71c5c5",
  borderGreen: "#2A5626",
};

export const GlobalStyles = StyleSheet.create({
  smallText: {
    fontSize: 12,
    color: Colors.primary500,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  defaultText: {
    fontSize: 16,
    color: Colors.primary500,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  largeText: {
    fontSize: 18,
    color: Colors.primary500,
    textAlign: "center",
    fontFamily: "PoppinsRegular",
  },
  bold: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
