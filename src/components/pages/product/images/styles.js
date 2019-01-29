import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const bulletStyle = {
  width: 20,
  height: 3,
  borderRadius: 0,
  marginLeft: 2,
  marginRight: 2,
  borderColor: "#d32e2e",
}

export default {
  carousel: {
    width: width,
    height: 300,
    marginTop: 25,
    marginBottom: 25
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bulletsContainerStyle: {
    bottom: 0,
  },
  bulletStyle: {
    ...bulletStyle
  },
  chosenBulletStyle: {
    ...bulletStyle,
    backgroundColor: "#d32e2e"
  },
  image: {
    width: width,
    height: 300
  },
  arrowIconStyle: {
    color: "#d32e2e"
  },
  leftArrowStyle: {
    marginLeft: 15
  },
  rightArrowStyle: {
    marginRight: 15
  }
}
