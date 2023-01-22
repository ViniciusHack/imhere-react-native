import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    fontSize: 16,
    color: "#6B6B6B"
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    flex: 1,
    marginRight: 12,
    fontSize: 16
  },
  button: {
    backgroundColor: "#31CF67",
    height: 56,
    width: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center"
  }
})