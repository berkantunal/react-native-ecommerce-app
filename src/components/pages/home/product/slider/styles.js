import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  contentContainer: {
    color: "#000",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
    marginTop: 15,
    position: "absolute"
  },
  arrowIconStyle: {
    color: "#d32e2e"
  },
  leftArrowStyle: {
    marginLeft: 15
  },
  rightArrowStyle: {
    marginRight: 15
  },
  title: {
    backgroundColor: "#ddd",
    paddingTop: 10,
    paddingBottom: 10
  },
  titleText: {

  }
}
