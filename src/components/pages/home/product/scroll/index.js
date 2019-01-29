import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, Dimensions } from 'react-native'
import { Title, Text } from 'native-base'
import { ProductItem } from "~/components/common/"

// Styles
import styles from "./styles";

const { height } = Dimensions.get('window');

const ProductScroll = props => {

  const { 
    title, 
    products 
  } = props

  const sliderTitle = (
    title &&
    <Title style={styles.title}><Text style={styles.titleText}>{title}</Text></Title>
  )

  const items = products.map((item, key) => (
    <ProductItem
      key={key} 
      product={item} 
      style={styles.miniStyle}
    />
  ));

  return (
    <View style={styles.contentBackground}>
      {sliderTitle}
      <ScrollView 
        contentContainerStyle={{ ...styles.scrollView, ...styles.contentBackground }} 
        alwaysBounceVertical={false} 
        horizontal={true} 
        style={{ flex: 1, flexWrap: "nowrap", flexDirection: "row" }}
      >
        {items}
      </ScrollView>
    </View>
  )
}

ProductScroll.defaultProps = {
  height: (height / 2),
  delay: 5000,
  title: null,
  ids: [],
  products: []
}

ProductScroll.propTypes = {
  height: PropTypes.number.isRequired,
  delay: PropTypes.number,
  title: PropTypes.string,
  ids: PropTypes.array,
  products: PropTypes.array
}

export default ProductScroll;
