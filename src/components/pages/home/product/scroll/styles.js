import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  title: {
    paddingTop: 10,
    paddingBottom: 10
  },
  titleText: {

  },
  contentBackground: {
    backgroundColor: "#ddd",
  },
  scrollView: {
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 5,
  },
  miniStyle: {
    backgroundColor: "#fff",
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10
  }
}
