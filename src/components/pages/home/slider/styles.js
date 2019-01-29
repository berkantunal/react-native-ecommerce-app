const bulletStyle = {
  width: 20,
  height: 3,
  borderRadius: 0,
  marginLeft: 2,
  marginRight: 2,
}

export default {
  carouseView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderText: {
    position: "absolute",
    left: 30,
    bottom: 30,
    color: "#fff",
    fontSize: 25
  },
  bulletsContainerStyle: {
    bottom: 0,
  },
  bulletStyle: {
    ...bulletStyle
  },
  chosenBulletStyle: {
    ...bulletStyle
  }
}
