import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors, GlobalStyles } from "../../constants/style";

export default function Icon({ icon, onPress, style, iconColor }) {
  return (
    <View style={[styles.container, style]}>
      <Feather
        name={icon}
        size={32}
        color={iconColor ?? Colors.primary500}
        onPress={onPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.headerIcon,
  },
});
