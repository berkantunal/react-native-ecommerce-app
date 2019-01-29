import React from 'react'
import PropTypes from 'prop-types'
import { Dimensions, Image } from 'react-native'
import { Col, Row } from 'react-native-easy-grid'

// Style
import styles from './styles'

const { width } = Dimensions.get('window')

const BannerContent = props => {

  const {
    style,
    children
  } = props

  return (
    <Row style={[ styles.row, style ]}>
      {children}
    </Row>
  )
}

BannerContent.propTypes = {
  style: PropTypes.object,
  children: PropTypes.array
}

const Banner = props => {
  const {
    col,
    height,
    image
  } = props

  const bannerWidth = (width / col) - (col * (2 / col));

  return (
    <Col style={[ 
      styles.imageContent, { 
        width: bannerWidth, height: height 
        } 
      ]}
    >
      <Image 
        source={image} 
        style={[ 
          styles.image, { 
            width: bannerWidth, 
            height: height 
          } 
        ]}
      />
    </Col>
  )
}

Banner.propTypes = {
  col: PropTypes.number,
  height: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
}

export {
  Banner,
  BannerContent
};