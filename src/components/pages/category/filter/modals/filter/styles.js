import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = {
  modalContainer: {
    backgroundColor: "transparent",
  },
  modalContent: {
  },
  modalCloseButton: {
    backgroundColor: "transparent",
    alignSelf: "center",
    justifyContent: "center",
    elevation: 0
  },
  modalCloseButtonIcon: {
    fontSize: 30,
    color: "#fff"
  },
  header: {
    backgroundColor: "#d32e2e",
    borderBottomColor: "#fff",
    height: 80
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 10
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
    backgroundColor: "#d32e2e",
    flex: 1,
    alignSelf: "stretch",
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
  input: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  },
  inputSizes: {
    full: {
      width: width - 30,
    },
    half: {
      width: (width / 2) - 30,
    },
    quarter: {
      width: (width / 4) - 30,
    }
  }
};

export default styles;
