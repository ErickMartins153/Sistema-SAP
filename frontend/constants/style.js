import { StyleSheet } from "react-native";

export const Colors = {
  primaryAlpha: "#447a7a7c",
  background: "#D9D9D9",
  primary500: "#447A7A",
  white: "#F8F1FF",
  buttonBackground: "#5DA4A4",
  buttonRipple: "#71c5c5",
};

export const GlobalStyles = StyleSheet.create({
  smallText: {
    fontSize: 12,
  },
  defaultText: {
    fontSize: 16,
    color: Colors.primary500,
  },
  largeText: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});
