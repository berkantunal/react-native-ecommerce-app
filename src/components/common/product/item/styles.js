import { Platform, Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const noMargin = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0
}

const noPadding = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}

const miniItemWidth = ((width / 2) - 20);

export const styles = {
  content: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    ...noPadding,
    width: miniItemWidth,
    borderRadius: 0,
  },
  titleContent: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 5,
  },
  titleText: {
    fontSize: 12,
    textAlign: "center"
  },
  shortDescription: {
    fontSize: 10,
    textAlign: "center"
  },
  image: {
    width: miniItemWidth,
    height: miniItemWidth,
    flex: 1,
  },
  oldPrice: {
    textAlign: "right",
    marginTop: 2,
    marginRight: 5,
    fontSize: 10,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#666",
    color: "#666"
  },
  price: {
    marginLeft: 5,
    fontSize: 12,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 7,
    height: 25,
    backgroundColor: "#d32e2e",
    marginTop: 10,
    marginLeft: 0,
    alignSelf: "center",
  },
  buttonText: {
    ...noPadding,
    color: "#fff",
    fontSize: 12,
    paddingLeft: 5,
  },
  buttonIcon: {
    ...noMargin,
    paddingTop: 1,
    fontSize: 14,
    color: "#fff",
  },
}

if (Platform.OS == "android") {
  styles.button.elevation = 0;
}

export const categoryItemStyles = {
  titleText: {
    textAlign: "left"
  },
  shortDescription: {
    textAlign: "left"
  },
  button: {
    width: miniItemWidth,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#d32e2e",
  },
  buttonText: {
    color: "#d32e2e"
  },
  buttonIcon: {
    color: "#d32e2e"
  },
  priceContent: {
    flex: 1,
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  oldPrice: {
    marginLeft: 10
  },
  image: {
    borderWidth: 1,
    borderColor: "#f1f1f1"
  }
};

export function getCategoryStyles() {

  let compiledStyles = {};

  for (let key in styles) {
    compiledStyles[key] = styles[key];

    if (typeof categoryItemStyles[key] != "undefined") {
      compiledStyles[key] = { ...compiledStyles[key], ...categoryItemStyles[key] }
    }
  }

  return compiledStyles
}