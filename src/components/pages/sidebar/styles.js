import { Platform, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: height / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? height / 10 : width / 9,
    top: Platform.OS === "android" ? height / 13 : width / 12,
    width: 210,
    height: 75,
    resizeMode: "contain"
  },
  title: {
    marginLeft: 16,
    paddingTop: 13,
    paddingRight: 13,
    paddingBottom: 13,
    paddingLeft: 0,
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 0
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  }
};
