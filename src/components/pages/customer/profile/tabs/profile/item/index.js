import React from 'react'
import PropTypes from 'prop-types'
import { Text, ListItem } from 'native-base'

import styles from './styles'

const Item = props => {
  const {
    title,
    value
  } = props;

  return (
    <ListItem style={styles.item}>
      <Text style={styles.listTitle}>{title}</Text>
      <Text>{value}</Text>
    </ListItem>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string
}

export default Item
