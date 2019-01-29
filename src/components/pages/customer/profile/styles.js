import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

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
  },

  // Tabs Style
  tab: {
    backgroundColor: "#fff",
  },
  tabText: {
    color: "#666"
  },
  activeTabStyle: {
    backgroundColor: "#fff",
  },
  activeTextStyle: {
    color: "#d32e2e",
    fontWeight: "normal"
  },
  tabBarUnderlineStyle: {
    backgroundColor: "#d32e2e",
    height: 2
  }
};
