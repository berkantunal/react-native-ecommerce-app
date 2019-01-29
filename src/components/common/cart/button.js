import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Icon, Text } from 'native-base'

import { addProduct } from '~/store/actions/cart'

const AddToCartButton = props => {

  const { 
    buttonStyle,
    iconStyle,
    textStyle,
    product,
    addProduct
  } = props

  const _onPress = () => {
    addProduct(product);
    // product
  }

  return (
    <Button 
      iconLeft 
      style={buttonStyle}
      onPress={_onPress}
    >
      <Icon 
        name='cart' 
        style={iconStyle}
      />
      <Text style={textStyle}>
        Satın Al
      </Text>
    </Button>
  )
}

AddToCartButton.propTypes = {
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = {
  addProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartButton)