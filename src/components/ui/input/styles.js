import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  view: {
    alignSelf: "stretch"
  },
  label: {
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#f1f1f1",
    paddingLeft: 15,
    alignSelf: "stretch"
  },
  multilineInput: {
    paddingTop: 15,
    paddingBottom: 15,
    height: 120,
    lineHeight: 50
  }
};
