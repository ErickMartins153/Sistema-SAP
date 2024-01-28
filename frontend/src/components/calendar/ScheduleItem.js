import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors, GlobalStyles } from "../../constants/style";

export default function ScheduleItem({ id, lastIndex }) {
  let appliedStyle = [styles.rootContainer, styles.borderBottom];
  if (lastIndex) {
    appliedStyle.pop();
  }
  return (
    <View style={appliedStyle}>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>10:20 - 11:10</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.appointmentContainer,
          pressed && styles.pressed,
        ]}
        onPress={() => {}}
      >
        <Text style={{ color: Colors.white, fontWeight: "bold" }}>Ocupado</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    elevation: 4,
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  timeContainer: {
    flex: 1,
    borderRightWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  timeText: {
    ...GlobalStyles.largeText,
  },
  appointmentContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff3c3c",
  },
  pressed: {
    opacity: 0.85,
  },
  dev: {
    backgroundColor: Colors.borderGreen,
  },
});
