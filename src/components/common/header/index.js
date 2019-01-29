import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { Image, View } from 'react-native'
import { Header, Title, Button, Badge, Text, Icon, Left, Right, Body } from 'native-base'

import styles from './styles'

import Logo from '~/assets/logo.png'

const AppHeader = props => {

  const { 
    title,
    children,
    hideCart,
    hideLogin,
    showBackButton,
    navigation,
    cart
  } = props

  let headerStyle = styles.header

  if (children === undefined) {
    headerStyle = { ...headerStyle, ...styles.defaultHeader }
  }

  if (title) {
    headerStyle = { ...headerStyle, ...styles.contextHeader }
  }

  return (
    <Header style={headerStyle}>
      <View style={{ ...styles.headerRow, ...styles.headerTopRow }}>
        <Left>
          {
            showBackButton === undefined ?
              <Button
                transparent
                onPress={() => navigation.navigate("DrawerOpen")}
              >
                <Icon name="menu" style={styles.menuIcon}/>
              </Button>
            :
              <Button
                transparent
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-back" style={styles.menuIcon}/>
              </Button>
          }
        </Left>
        <Body>
          {
            title === null ?
              <Image source={Logo} style={styles.logo}/>
            :
              <Title style={styles.title}>{title}</Title>
          }
        </Body>
        <Right style={styles.headerRight}>
          {
            hideCart === undefined ?
              <Button
                style={styles.headerRightButton}
                transparent
                onPress={() => navigation.navigate("Cart")}
              >
                <Icon 
                  name="cart" 
                  style={{ ...styles.cartIcon, ...styles.headerRightButtonIcon }}
                />
                {
                  cart.cartProducts.length > 0 &&
                    <Badge style={styles.cartBadge}>
                      <Text style={styles.cartBadgeText}>
                        {cart.cartProducts.length}
                      </Text>
                    </Badge>
                }
              </Button>
            :
              null
          }
          {
            hideLogin === undefined ?
              <Button
                style={styles.headerRightButton}
                transparent
                onPress={() => navigation.navigate("Login")}
              >
                <Icon
                  name="contact"
                  style={{ ...styles.cartIcon, ...styles.headerRightButtonIcon }}/>
              </Button>
            :
            null
          }
        </Right>
      </View>
      {
        children &&
        <View style={styles.headerRow}>
          {children}
        </View>
      }
    </Header>
  )
}

AppHeader.defaultProps = {
  type: "default",
  title: null,
  filters: []
}

AppHeader.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  hideCart: PropTypes.any,
  hideLogin: PropTypes.any,
  showBackButton: PropTypes.any,
  navigation: PropTypes.object,
  cart: PropTypes.object
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(withNavigation(AppHeader))