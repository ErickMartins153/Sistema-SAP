import { useEffect, useState } from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { startOfWeek, addDays, format, getDate } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, GlobalStyles } from "../../constants/style";
import ScheduleList from "./ScheduleList";

export function getWeekDays(date) {
  const start = startOfWeek(date, { weekStartsOn: 0 });
  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, "EEE", { locale: ptBR }),
      date,
      day: getDate(date),
    });
  }
  return final;
}

export default function Calendar({ date }) {
  const today = new Date().getDate();

  const [week, setWeek] = useState([]);
  const [selectedDay, setSelectedDay] = useState(today);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  function handleSelectedDay(day) {
    setSelectedDay(day);
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        {week.map((weekDay) => {
          const formatted =
            weekDay.formatted[0].toUpperCase() +
            weekDay.formatted.slice(1, 3) +
            ".";

          return (
            <View key={weekDay.formatted}>
              <Pressable
                style={({ pressed }) => [pressed && styles.pressed]}
                onPress={() => handleSelectedDay(weekDay.day)}
              >
                <Text
                  style={[selectedDay === weekDay.day && styles.weekDayName]}
                >
                  {formatted}
                </Text>
                <View
                  style={[
                    selectedDay === weekDay.day && styles.selectedDayContainer,
                  ]}
                >
                  <Text style={[styles.weekDayNumber]}>{weekDay.day}</Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>

      <ScheduleList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: Colors.scheduleHeader,
    marginTop: 32,
    marginHorizontal: 8,
    borderRadius: 12,
    elevation: 8,
  },
  weekDayName: {
    ...GlobalStyles.smallText,
    color: Colors.white,
    fontWeight: "bold",
  },
  weekDayNumber: {
    ...GlobalStyles.smallText,
    color: "black",
    padding: 6,
    minWidth: 30,
  },
  selectedDayContainer: {
    color: Colors.accentColor,
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: Colors.borderGreen,
  },
  pressed: {
    opacity: 0.25,
  },
  selectedDayText: {
    color: Colors.white,
  },
});
