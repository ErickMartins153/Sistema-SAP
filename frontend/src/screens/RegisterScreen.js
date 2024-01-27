import { StyleSheet, Text, View } from "react-native";
import { Colors, GlobalStyles } from "../constants/style";
import RegisterForm from "../components/RegisterForm";
import UserList from "../components/UserList";

export default function RegisterScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>CADASTRAR</Text>
        <RegisterForm />
        <View style={{ marginBottom: 16 }}>
          <Text style={[styles.title, { marginTop: 16 }]}>REMOVER</Text>
          <UserList />
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
  title: {
    ...GlobalStyles.title,
    marginBottom: 8,
  },
});
