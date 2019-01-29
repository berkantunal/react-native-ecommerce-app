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
  selectBoxButton: {
    height: 40,
    backgroundColor: "#f1f1f1",
    paddingLeft: 15,
    alignSelf: "stretch",
    borderRadius: 0,
    paddingLeft: 10
  },
  selectBoxButtonText: {
    color: "#000",
    paddingLeft: 5,
    marginLeft: 0
  },

  // Modal
  modalContainer: {
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingRight: 15
  },
  modalCloseButton: {
    backgroundColor: "#f1f1f1",
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: "#f1f1f1",
    elevation: 0
  },
  modalCloseButtonIcon: {
    fontSize: 30,
    color: "#333"
  },
  modalCloseButtonText: {
    paddingLeft: 10,
    color: "#333"
  }
};
