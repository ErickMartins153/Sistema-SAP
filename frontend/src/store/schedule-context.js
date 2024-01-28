import { createContext, useState } from "react";

export const ScheduleContext = createContext({
  reservations: [],
  reserveRoom: () => {},
  cancelReservation: () => {},
});

export default function ScheduleContextProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  function reserveRoom(userId, date, room) {}

  function cancelReservation(date, room) {}

  const value = {
    reservations: reservations,
    reserveRoom: reserveRoom,
    cancelReservation: cancelReservation,
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
}
