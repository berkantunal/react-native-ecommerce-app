import React from 'react'
import { View } from 'react-native'
import { Input, Button, Icon } from 'native-base'

import styles from './styles'

const Search = () => {
  return (
    <View style={styles.searchContent}>
      <Input 
        style={styles.searchInput} 
        placeholder="Search" 
      />
      <Button style={styles.searchButton}>
        <Icon 
          name="search" 
          style={styles.searchButtonIcon}
        />
      </Button>
    </View>
  )
}

export default Search;
