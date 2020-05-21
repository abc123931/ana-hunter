import { StyleSheet, StatusBar, Platform } from "react-native";

export const SafeAreaViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});