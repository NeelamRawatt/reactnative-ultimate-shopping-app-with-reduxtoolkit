import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./src/Navigation";
import { store } from "./src/store";
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
