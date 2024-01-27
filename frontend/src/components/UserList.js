import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";
import User from "./User";
import { Colors } from "../constants/style";
import Icon from "./UI/Icon";

export default function UserList() {
  const { users } = useContext(AuthContext);
  function handleUser(user) {
    return <User userData={user.item} />;
  }

  return (
    <View style={styles.container}>
      <Icon
        icon="filter"
        style={styles.icon}
        onPress={() => console.log(users)}
      />
      <FlatList
        data={users}
        renderItem={handleUser}
        keyExtractor={(item) =>
          new Date().toISOString() + Math.random().toString()
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: Colors.white,
    paddingBottom: 12,
  },
  icon: {
    marginTop: 24,
    alignItems: "flex-end",
    marginRight: 32,
  },
});
