import { useState } from "react";

import { RefreshControl, ScrollView, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/style";

export default function Fallback() {
  const [refreshing, setRefreshing] = useState(false);

  function handleRefresh() {}
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <Text style={styles.fallbackText}>
        Não há nenhum post disponivel, tente atualizar a página ou cheque
        novamente mais tarde!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
    marginHorizontal: 8,
    justifyContent: "center",
  },
  fallbackText: {
    ...GlobalStyles.largeText,
    paddingHorizontal: 12,
    fontWeight: "bold",
  },
});
