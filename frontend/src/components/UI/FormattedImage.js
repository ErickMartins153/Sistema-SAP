import { Image, StyleSheet, View } from "react-native";
import Button from "./Button";

export default function FormattedImage({ path, deleteButton, onDelete }) {
  return (
    <View style={styles.imageButtonContainer}>
      <Image style={styles.image} source={path} />
      {deleteButton && <Button onPress={onDelete}>Remover imagem</Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  imageButtonContainer: {
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
