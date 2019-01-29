export default {
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#f1f1f1"
  },
  imageContent: {
    width: 75,
    flex: 0,
  },
  image: {
    width: 60,
    height: 60,
    flex: 1
  },
  titleContent: {
    textAlign: "left",
    alignItems: "flex-start",
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 0
  },
  button: {
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: "transparent",
    marginTop: 10,
    elevation: 0
  },
  buttonIcon: {
    paddingLeft: 0,
    paddingRight: 0,
    color: "#000"
  },
  buttonText: {
    padding: 0,
    color: "#000"
  },
  priceContent: {
    alignItems: "stretch",
    justifyContent: "center"
  },
  oldPrice: {
    textAlign: "right",
    marginRight: 0,
    fontSize: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#666",
    color: "#666",
  },
  price: {
    textAlign: "right",
    marginTop: 5,
    fontSize: 16,
  },
}