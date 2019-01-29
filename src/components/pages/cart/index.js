import React, { Component } from 'react'
import { ListView } from 'react-native';
import PropTypes from 'prop-types'
import { Container, Text, Content,  List, Button, Icon, Footer } from 'native-base'
import { AppHeader } from '~/components/common/'
import Item from './item/'

// Styles
import styles from './styles'

class Cart extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    cart: PropTypes.object,
    deleteProduct: PropTypes.func.isRequired
  }

  render() {
    const {
      navigation,
      cart,
      deleteProduct
    } = this.props

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const data = ds.cloneWithRows(cart.cartProducts);

    return (
      <Container style={styles.container}>
        <AppHeader
          showBackButton 
          hideCart 
          title="Sepet"
        />
        <Content>
          <List
            rightOpenValue={-75}
            dataSource={data}
            renderRow={
              product => 
                <Item product={product} />
            }
            renderRightHiddenRow={
              (data) =>
                <Button 
                  full 
                  danger 
                  onPress={() => deleteProduct(data)}
                >
                  <Icon 
                    active 
                    name="trash" 
                  />
                </Button>
            }
          />
        </Content>
        <Footer style={styles.footer}>
          <Button
            style={styles.footerButton}
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          >
            <Text style={styles.footerButtonText}>
              SATIN AL
            </Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}

export default Cart
