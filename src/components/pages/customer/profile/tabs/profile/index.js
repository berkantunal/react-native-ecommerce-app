import React from 'react'
import { View } from 'react-native'
import { Content, Button, Text, List, Thumbnail } from 'native-base'
import Item from './item/'

import styles from './styles'

import ProfileImage from '~/assets/profile.png'

const Profile = () => {
  return (
    <View>
      <Thumbnail style={styles.thumbnail} square large source={ProfileImage} />
      <List>
        <Item title="Ad" value="" />
        <Item title="Kullanıcı Adı" value="" />
        <Item title="E mail" value="" />
        <Item title="Gsm" value="" />
        <Item title="Ülke" value="" />
      </List>
      <Content style={styles.content}>
        <Button style={styles.logoutButton} onPress={this.logout} bordered warning>
          <Text style={styles.logoutButtonText}>ÇIKIŞ YAP</Text>
        </Button>
      </Content>
    </View>
  )
}

export default Profile
