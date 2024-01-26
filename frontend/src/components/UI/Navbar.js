import { DrawerContentScrollView } from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";
import { Title, Caption, Drawer } from "react-native-paper";

import LogoutIcon from "./LogoutIcon";
import { Colors, GlobalStyles } from "../../constants/style";
import NavbarItem from "./NavbarItem";
import UserAvatar from "./UserAvatar";

export default function Navbar(props) {
  function handleNavigation(destinyPage) {
    props.navigation.navigate(destinyPage);
  }

  return (
    <View style={styles.rootContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.avatar}>
            <UserAvatar size={144} />
            <View style={styles.userInfoSection}>
              <Title style={styles.userInfoText}>Fulano de tal</Title>
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
              page="Home"
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
              page="Home"
            />
            <NavbarItem
              label="Gerenciar Usuários"
              labelStyle={styles.LabelStyle}
              icon="users"
              size={50}
              onPress={handleNavigation}
              page="Home"
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
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