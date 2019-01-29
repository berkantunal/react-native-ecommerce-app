import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default {
  col: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  bold: {
    fontWeight: "bold"
  },
  row: {
    padding: 20
  },
  title: {
    marginBottom: 5,
    fontSize: 14
  },
  value: {
    fontSize: 14
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
