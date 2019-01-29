import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableHighlight } from 'react-native'
import { Left, Right, Text } from 'native-base'

// Styles
import styles from './styles'

const Item  = props => {
  const {
    style,
    navigation
  } = props

  return (
    <View style={[ styles.content, style ]}>
      <Left style={styles.imageContent}>
        <TouchableHighlight 
          underlayColor="transparent" 
          onPress={() => navigation.navigate("Product")}
        >
          <Image 
            resizeMode="contain" 
            source={{uri: 'https://ciceksepeticomscdn.akamaized.net/cicek/kc375359-1/XL/dzgsilver-zirkon-tasli-kar-tanesi-kolyesi-bayan-gumus-kolye-177fe-kc375359-1-1.jpg'}} 
            style={styles.image}
          />
        </TouchableHighlight>
      </Left>
      <Left style={styles.titleContent}>
        <Text style={styles.titleText}>
          1x NativeBase
        </Text>
        <Text 
          style={styles.shortDescription} 
          note
        >
          Short Description
        </Text>
      </Left>
      <Right style={styles.priceContent}>
        <Text style={styles.oldPrice}>
          10 TL
        </Text>
        <Text style={styles.price}>
          15 TL
        </Text>
      </Right>
    </View>
  )
}

Item.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object
}

export default Item
