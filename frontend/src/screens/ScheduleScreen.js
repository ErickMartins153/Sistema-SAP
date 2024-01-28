import { useLayoutEffect } from "react";
import ScreenLayout from "../components/UI/ScreenLayout";
import Calendar from "../components/calendar/Calendar";
import { GlobalStyles } from "../constants/style";
import ScheduleContextProvider from "../store/schedule-context";

const date = new Date();

export default function ScheduleScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        ...GlobalStyles.title,
        marginBottom: 0,
      },
    });
  }, [navigation]);
  return (
    <ScheduleContextProvider>
      <ScreenLayout style={{ alignItems: "stretch" }}>
        <Calendar date={date} />
      </ScreenLayout>
    </ScheduleContextProvider>
  );
}
