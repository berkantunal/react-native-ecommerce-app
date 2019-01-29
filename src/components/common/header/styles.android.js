const iconStyle = {
  fontSize: 26,
  color: "#000"
};

export default {
  header: {
    height: 100,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "#fff",
    flexDirection: "column",
    elevation: 0,
  },
  logo: {
    width: 120,
    height: 25,
  },
  menuIcon: {
    ...iconStyle,
    marginLeft: 15
  },
  cartIcon: {
    ...iconStyle,
    marginRight: 20,
  },
  headerContent: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap"
  },
  headerRow: {
    flex: 1,
    flexDirection: "row"
  },
  headerTopRow: {
    height: 55
  },
  headerRight: {
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  headerRightButton: {
    width: 50,
    textAlign: "center",
    paddingLeft: 0,
    paddingRight: 0
  },
  headerRightButtonIcon: {
    marginLeft: 5,
    marginRight: 0,
  },
  title : {
    color: "#000",
  },

  // Header Default Type
  defaultHeader: {
    height: 75,
  },

  // Header Context Type
  contextHeader: {
    height: 85,
    backgroundColor: "#fff",
    borderBottomWidth: 0
  }
};
