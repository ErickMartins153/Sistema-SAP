import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import { Feather } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../../constants/style";

export default function LogoutIcon() {
  const authCtx = useContext(AuthContext);

  function handleLogout() {
    Alert.alert(
      "Tem certeza?",
      "Você precisará realizar o login novamente.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          style: "default",
          onPress: () => authCtx.logout(),
        },
      ],
      { cancelable: true }
    );
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      android_ripple={{ color: Colors.buttonRipple }}
      onPress={handleLogout}
    >
      <View style={styles.internalContainer}>
        <Feather name="power" size={50} color={Colors.primary500} />
        <Text style={styles.text}>Sair</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    left: 12,
    bottom: 8,
    borderRadius: 16,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.75,
  },

  internalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...GlobalStyles.largeText,

    marginHorizontal: 44,
  },
});
