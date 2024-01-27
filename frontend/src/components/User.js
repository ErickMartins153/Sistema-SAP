import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import UserAvatar from "./UI/UserAvatar";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

export default function User({ userData }) {
  const { deleteUser } = useContext(AuthContext);

  function handlePress() {
    Alert.alert(
      "Você tem certeza?",
      "Uma vez deletado esse usuário não poderá logar!",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: handleDeleteUser,
        },
      ]
    );
  }

  function handleDeleteUser() {
    deleteUser(userData.name);
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
      onPress={handlePress}
      android_ripple={{ color: Colors.accentColor }}
    >
      <View style={styles.avatar}>
        <UserAvatar size={64} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{userData.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{userData.email}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.buttonRipple,
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 16,
    marginHorizontal: 32,
    paddingVertical: 2,
    paddingHorizontal: 12,
    overflow: "hidden",
    flexDirection: "row",
  },
  pressed: {
    opacity: 0.75,
  },
  content: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    flex: 1,
    padding: 4,
    backgroundColor: Colors.accentColor,
  },
  avatar: {
    width: 69,
  },
  headerText: {
    ...GlobalStyles.smallText,
    textAlign: "left",
    color: "white",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  textContainer: {
    backgroundColor: Colors.background,
  },
  text: {
    ...GlobalStyles.smallText,
    justifyContent: "center",
    textAlign: "left",
    padding: 8,
  },
});
