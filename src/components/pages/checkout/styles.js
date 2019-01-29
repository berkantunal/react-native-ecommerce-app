import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  formContainer: {
    alignItems: "center",
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },

  processTabContent: {
    height:90
  },
  processTabRow: {
    paddingTop: 0,
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
  },
};
