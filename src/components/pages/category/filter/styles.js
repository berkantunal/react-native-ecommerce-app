import { Platform, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = {
  // Filter
  filterRow: {
    marginTop: 6,
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  filterButton: {
    width: (width / 2),
    borderRadius: 0,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 47,
    elevation: 0,
    borderColor: "#f1f1f1",
    borderTopWidth: 1,
    borderTopColor: "#f1f1f1",
  },
  filterButtonLeft: {
    borderRightWidth: 1,
    borderRightColor: "#f1f1f1",
  },
  filterButtonRight: {
    // borderLeftWidth: 1,
    // borderLeftColor: "#f1f1f1",
  },
  filterButtonIcon: {
    fontSize: 13,
    marginLeft: 0,
    marginRight: 0
  },
  filterButtonText: {
    fontSize: 14,
    paddingLeft: 10,
    paddingTop: 2,
    color: "#000"
  }
};


if (Platform.OS == "android") {
  styles.filterButton.elevation = 0;

  styles.filterButton.borderBottomWidth = 1;
  styles.filterButton.borderBottomColor = "#f1f1f1";
}

export default styles;
