import React from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { Button, Left, Right, Text, ListItem } from 'native-base'
import { Row } from 'react-native-easy-grid'

import styles from './styles'

const OrderListItem = props => {
  
  const { navigation } = props;

  return (
    <ListItem>
      <Left style={styles.left}>
        <Row style={styles.date}>
          <Text>
            01.01.2019 Tarihli Sipariş
          </Text>
        </Row>
        <Row>
          <Text style={[ styles.bold ]}>
            Durumu:
          </Text>
          <Text>
            Hazırlanıyor.
          </Text>
        </Row>
      </Left>
      <Right>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate('OrderDetail');
          }}
        >
          <Text style={styles.buttonText}>
            Detay
          </Text>
        </Button>
      </Right>
    </ListItem>
  )
}

OrderListItem.propTypes = {
  navigation: PropTypes.object
}

export default withNavigation(OrderListItem)
