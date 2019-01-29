import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  checkboxlist: {
    borderBottomWidth: 1,
    borderBottomColor: "#f1f1f1",
    alignSelf: "stretch",
    flex: 1
  },
  checkboxlistItem: {
    marginLeft: 0,
  },
  checkbox: {
    alignSelf: "stretch",
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 35,
    paddingLeft: 25,
    paddingRight: 10
  },
  label: {
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  touchable: {
    flex: 1,
    alignSelf: "stretch",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  text: {
    color: "#000",
    textAlign: "left"
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    fontSize: 40,
    lineHeight: 34,
    paddingTop: 0,
    paddingLeft: 6,
    color: "#fff"
  },
  iconActive: {
    color: "#d32e2e"
  }
};
