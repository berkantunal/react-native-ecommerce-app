import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default {
  formContainer: {
    alignItems: "center",
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },

  processTabCol: {
    justifyContent: "center",
    alignItems: "center"
  },
  processIcon: {
    height: 35,
    lineHeight: 35,
    fontSize: 25,
    color: "#aaa"
  },
  processIconCheck: {
    fontSize: 40,
    lineHeight: 40,
  },
  processText: {
    fontSize: 12,
    color: "#aaa"
  },
  processIconActive: {
    color: "#111"
  },
  processTextActive: {
    color: "#111"
  },
  processIconDone: {
    color: "#000"
  },
  processTextDone: {
    color: "#000"
  },

  footer: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: "#f1f1f1",
    height: 85,
    elevation: 0
  },
  footerButton: {
    width: width,
    backgroundColor: "#d32e2e",
    flex: 1,
    justifyContent: "center",
    height: 50,
    marginLeft: 20,
    marginRight: 20
  },
  footerButtonText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 18
  }
};
