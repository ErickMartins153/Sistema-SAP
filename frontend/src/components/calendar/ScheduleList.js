import { FlatList, ScrollView, StyleSheet } from "react-native";
import ScheduleItem from "./ScheduleItem";
const dummy = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9"];
//

export default function ScheduleList() {
  const appoitments = dummy;

  return (
    <ScrollView style={styles.rootContainer}>
      <ScheduleItem lastIndex={false} id={1} />
      <ScheduleItem lastIndex={false} id={2} />
      <ScheduleItem lastIndex={false} id={3} />
      <ScheduleItem lastIndex={false} id={4} />
      {/* pausa */}
      <ScheduleItem lastIndex={false} id={5} />
      <ScheduleItem lastIndex={false} id={6} />
      <ScheduleItem lastIndex={false} id={7} />
      <ScheduleItem lastIndex={false} id={8} />
      <ScheduleItem lastIndex={true} id={9} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 24,
    marginBottom: 12,
  },
  contentContainer: {
    marginHorizontal: 16,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 4,
    overflow: "hidden",
  },
});
