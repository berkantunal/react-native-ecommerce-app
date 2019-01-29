import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window");

export default {
  searchContent: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    height: 50,
    alignItems: "baseline",
    justifyContent: "center"
  },
  searchInput: {
    height: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 3,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 3,
    paddingTop: 0,
    paddingLeft: 5,
    fontSize: 15,
    lineHeight: 30,
  },
  searchButton: {
    width: 40,
    height: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    elevation: 0
  },
  searchButtonIcon: {
    color: "#000",
    fontSize: 22,
    marginLeft: 0,
    marginRight: 0,
  }
};
