import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default {
  processTabCol: {
    justifyContent: "center",
    alignItems: "center"
  },
  processIcon: {
    height: 35,
    fontSize: 40,
    lineHeight: 40,
    color: "#aaa"
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

  finishView: {
    alignItems: "center",
    justifyContent: "center"
  },
  finishIcon: {
    fontSize: 80,
    color: "#4caf50",
    marginTop: 50
  },
  finishText: {
    color: "#000",
    fontSize: 18,
    marginTop: 20
  },
  finishButton: {
    alignSelf: "center",
    backgroundColor: "#d32e2e",
    marginTop: 20
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
