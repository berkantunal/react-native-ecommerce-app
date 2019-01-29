import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, Text, View, Dimensions } from 'react-native'
import Carousel from 'react-native-looped-carousel'

// Styles
import styles from './styles'

const { width } = Dimensions.get('window');

const Slider = props => {

  const { 
    images, 
    height,
    delay
  } = props;

  let carouselHeight = height;

  if (!carouselHeight) {
    carouselHeight = (height / 2);
  }

  const components = images.map((image, key) => {
    return (
      <View key={key} style={styles.contentContainer}>
        <ImageBackground source={{ uri: image.source }} style={{ width: width, height: carouselHeight }}>
          <Text style={styles.sliderText}>{image.title}</Text>
        </ImageBackground>
      </View>
    )
  })

  return (
    <View style={styles.carouselView}>
      <View style={styles.container}>
        <Carousel
          delay={delay}
          style={{ width: width, height: carouselHeight }}
          autoplay
          bullets
          bulletsContainerStyle={styles.bulletsContainerStyle}
          bulletStyle={styles.bulletStyle}
          chosenBulletStyle={styles.chosenBulletStyle}
        >
          {components}
        </Carousel>
      </View>
    </View>
  );
}

Slider.defaultProps = {
  delay: 5000,
  images: []
}

Slider.propTypes = {
  height: PropTypes.number.isRequired,
  delay: PropTypes.number,
  images: PropTypes.array
}

export default Slider;
