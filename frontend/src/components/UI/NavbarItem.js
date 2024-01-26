import { DrawerItem } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

export default function NavbarItem({
  label,
  icon,
  size,
  onPress,
  labelStyle,
  page,
}) {
  return (
    <DrawerItem
      label={label}
      icon={({ color }) => <Feather name={icon} color={color} size={size} />}
      labelStyle={[labelStyle]}
      onPress={() => onPress(page)}
    />
  );
}
