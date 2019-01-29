import React from 'react'
import PropTypes from 'prop-types'
import { Image, View } from 'react-native'
import { Icon } from 'native-base'

import Carousel from 'react-native-looped-carousel'

// Styles
import styles from "./styles"

const Images = props => {

  const { 
    images 
  } = props;

  return (
    <Carousel
      style={styles.carousel}
      autoplay={false}
      bullets
      bulletsContainerStyle={styles.bulletsContainerStyle}
      bulletStyle={styles.bulletStyle}
      chosenBulletStyle={styles.chosenBulletStyle}
      arrows
      leftArrowText={<Icon style={styles.arrowIconStyle} name='arrow-back'/>}
      rightArrowText={<Icon style={styles.arrowIconStyle} name='arrow-forward'/>}
      leftArrowStyle={styles.leftArrowStyle}
      rightArrowStyle={styles.rightArrowStyle}
      >
      {
        images.map((image, key) => (
          <View key={key} style={styles.contentContainer}>
            <Image 
              resizeMode="contain" 
              source={{ uri: image.source }} 
              style={styles.image}
            />
          </View>
        ))
      }
    </Carousel>
  )
}

Images.propTypes = {
  images: PropTypes.array
}

export default Images;
