import { StyleSheet } from "react-native";


export const participantStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: "1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    color: "#FFF",
    flex: 1,
    fontSize: 16,
    marginLeft: 16
  },
  button: {
    backgroundColor: "#E23C44",
    height: 56,
    width: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  }
})