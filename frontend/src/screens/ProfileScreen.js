import { StyleSheet, Text, View } from "react-native";
import { useContext, useLayoutEffect } from "react";

import Icon from "../components/UI/Icon";
import { Colors, GlobalStyles } from "../constants/style";
import UserAvatar from "../components/UI/UserAvatar";
import { AuthContext } from "../store/auth-context";
import Button from "../components/UI/Button";

export default function ProfileScreen({ navigation }) {
  function handleEdit() {
    alert("Em breve!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          icon="edit"
          style={{ marginTop: 8, marginRight: 16 }}
          onPress={handleEdit}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.userContainer}>
          <UserAvatar size={144} />
          <View>
            <Text style={styles.userText}>Fulano de Tal</Text>
            <Text style={styles.pronouns}>(Ele/Dele)</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Button style={styles.button} onPress={() => {}}>
              Dados pessoais
            </Button>
            <Button style={styles.button} onPress={() => {}}>
              Segurança e Privacidade
            </Button>
            <Button style={styles.button} onPress={() => {}}>
              Estatísticas
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    marginHorizontal: "auto",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    marginTop: 100,
  },
  userContainer: {
    alignItems: "center",
  },
  userText: {
    ...GlobalStyles.defaultText,
    fontWeight: "bold",
    marginTop: 16,
  },
  pronouns: {
    ...GlobalStyles.smallText,
  },
  buttonsContainer: {
    marginVertical: 24,
  },
  button: {
    paddingHorizontal: "24%",
    paddingVertical: "4%",
    marginVertical: 12,
  },
});
