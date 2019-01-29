import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { Dimensions, Image, TouchableHighlight } from "react-native"
import { Icon, Text } from 'native-base'
import { Col, Row } from 'react-native-easy-grid'

import styles from './styles'

const { width } = Dimensions.get('window')

const Banner = props => {
  const {
    categories,
    col,
    height,
    style,
    navigation
  } = props;

  const bannerWidth = (width / col) - (col * (2 / col));

  const cols = categories.map((item, key) => (
    <TouchableHighlight 
      key={key} 
      underlayColor="transparent" 
      onPress={() => navigation.navigate("CategoryList", { id: item.id })}
    >
      <Col style={[ styles.imageContent, { 
        width: bannerWidth, 
        height: height + 50 
        }]
      }>
        <Image 
          resizeMode="contain" 
          source={{ uri: item.source }} 
          style={[ styles.image, { 
            width: bannerWidth, 
            height: height 
          }]}
        />
        <Text style={styles.text}>
          {item.title} 
          <Icon 
            name="arrow-forward" 
            style={styles.textIcon}
          />
        </Text>
      </Col>
    </TouchableHighlight>
  ));

  return (
    <Row style={[ styles.row, style ]}>
      {cols}
    </Row>
  )
}

Banner.propTypes = {
  categories: PropTypes.array.isRequired,
  col: PropTypes.number,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  navigation: PropTypes.object
}

export default withNavigation(Banner);
