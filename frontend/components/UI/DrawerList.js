import { DrawerItemList } from "@react-navigation/drawer";
import LogoutIcon from "./LogoutIcon";
export default function DrawerList(props) {
  return (
    <>
      <DrawerItemList {...props} />
      <LogoutIcon />
    </>
  );
}
