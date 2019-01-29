import React from 'react'
import { View } from 'react-native'
import { List } from 'native-base'
import Item from './item/'

/* import styles from './styles' */

const OrderList = () => {
  return (
    <View>
      <List>
        <Item />
        <Item />
        <Item />
        <Item />
      </List>
    </View>
  )
}

export default OrderList