import React from 'react'
import PropTypes from 'prop-types'
import { Container, Text, Content, Footer, Button } from 'native-base'
import { Col, Row } from 'react-native-easy-grid'
import { AppHeader } from '~/components/common/'
import Item from './product/'

// Styles
import styles from './styles'

const OrderDetail = props => {

  const { navigate } = props.navigation;

  return (
    <Container style={styles.container}>
      <AppHeader 
        hideCart
        showBackButton 
        title="01.01.2018 Tarihli Siparişim"
      />
      <Content>
        <Row style={styles.row}>
          <Col style={styles.col}>
            <Text style={[ styles.title, styles.bold]}>
              Tarih
            </Text>
            <Text style={styles.value}>
              01.01.2018
            </Text>
          </Col>
          <Col>
            <Text style={[ styles.title, styles.bold]}>
              Durum
            </Text>
            <Text style={styles.value}>
              Hazırlanıyor
            </Text>
          </Col>
        </Row>
        <Item />
        <Item />
        <Item />
        <Item />
      </Content>
      <Footer style={styles.footer}>
        <Button
          style={styles.footerButton}
          onPress={() => {
            navigate('Checkout')
          }}
          ><Text style={styles.footerButtonText}>Siparişi Tekrarla</Text></Button>
      </Footer>
    </Container>
  )
}

OrderDetail.propTypes = {
  navigation: PropTypes.object
}

export default OrderDetail