import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default {
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
