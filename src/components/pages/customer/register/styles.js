import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default {
  formContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 10
  },
  menuIcon: {
    fontSize: 26,
    color: "#000"
  },
  logo: {
    flex: 1,
    width: 150,
    height: 50
  },
  form: {
  },
  item: {
    marginLeft: 0,
    flexDirection: "column",
  },
  label: {
    marginTop: 15,
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: "#f1f1f1",
    paddingLeft: 15
  },
  button: {
    justifyContent: "center",
    width: (width - 40),
    marginTop: 25,
  },
  buttonText: {
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    textAlign: "center"
  }
};
