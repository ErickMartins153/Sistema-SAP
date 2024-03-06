import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Alert, StyleSheet, View } from "react-native";
import { Title, Caption, Drawer } from "react-native-paper";

import LogoutIcon from "./LogoutIcon";
import { Colors, GlobalStyles } from "../../constants/style";
import NavbarItem from "./NavbarItem";
import UserAvatar from "./UserAvatar";
import { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

export default function Navbar(props) {
  const { status, token } = useContext(AuthContext);

  function handleNavigation(destinyPage) {
    props.navigation.navigate(destinyPage);
  }

  function formatName(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
  return (
    <View style={styles.rootContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.avatar}>
            <UserAvatar size={144} />
            <View style={styles.userInfoSection}>
              <Title style={styles.userInfoText}>{formatName(token)}</Title>
              <Caption>Cargo/função</Caption>
            </View>
          </View>
          <Drawer.Section>
            <NavbarItem
              label="Meu Perfil"
              labelStyle={styles.LabelStyle}
              icon="user"
              size={50}
              onPress={handleNavigation}
              page="Profile"
            />
            <NavbarItem
              label="Mural"
              labelStyle={styles.LabelStyle}
              icon="message-square"
              size={50}
              onPress={handleNavigation}
              page="Home"
            />
            <NavbarItem
              label="Horário"
              labelStyle={styles.LabelStyle}
              icon="calendar"
              size={50}
              onPress={handleNavigation}
              page="Schedule"
            />
            {status === "admin" && (
              <NavbarItem
                label="Gerenciar Usuários"
                labelStyle={styles.LabelStyle}
                icon="users"
                size={50}
                onPress={handleNavigation}
                page="Register"
              />
            )}
            {/* <View style={{ alignItems: "flex-end" }}>
              <NavbarItem
                label="Ajuda"
                labelStyle={styles.LabelStyle}
                icon="help-circle"
                size={50}
                onPress={handleNavigation}
              />
            </View> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          position: "absolute",
          width: 200,
          bottom: "10%",
          left: 0,
          margin: 0,
          padding: 0,
          marginLeft: -6,
        }}
      >
        <NavbarItem
          label="Ajuda"
          labelStyle={styles.LabelStyle}
          icon="help-circle"
          size={50}
          onPress={() => Alert.alert("Em breve!")}
        />
      </View>
      <LogoutIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  avatar: {
    flex: 1,
    marginTop: 16,
    alignItems: "center",
  },
  userInfoSection: {
    marginHorizontal: "auto",
    marginVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoText: {
    ...GlobalStyles.defaultText,
    fontSize: 18,
    textAlign: "center",
    borderBottomColor: Colors.borderGreen,
    borderBottomWidth: 1,
  },
  LabelStyle: {
    ...GlobalStyles.largeText,
    textAlign: "left",
  },
});
