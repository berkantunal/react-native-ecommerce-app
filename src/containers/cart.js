import Cart from '~/components/pages/cart/'
import { connect } from 'react-redux'

import { deleteProduct } from '~/store/actions/cart'

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = {
  deleteProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
