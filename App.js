import React from "react";
import { StyleSheet, View } from "react-native";
import { AppbarHeader } from "./components/AppbarHeader";
import { BarNavigation } from "./components/BarNavigation";
import { Provider } from "react-redux";
import store from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppbarHeader />
        <BarNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});
