import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView } from 'react-native'
import { Text, Footer, Icon, Button } from 'native-base'
import { Col, Row } from 'react-native-easy-grid'
import { Input, Select } from '~/components/ui/'

// Styles
import styles from './styles'

const Payment = () => {
  return (
    <KeyboardAvoidingView 
      behavior="padding" 
      style={[ styles.formContainer, styles.checkoutContent ]} 
      enabled
    >
      <Input title="Ad Soyad" />
      <Input title="Kredi Kartı Numarası" />
      <Row style={styles.row}>
        <Col style={{ marginRight: 15 }}>
          <Select title="Ay" />
        </Col>
        <Col style={{ marginRight: 15 }}>
          <Select title="Yıl" />
        </Col>
        <Col >
          <Input title="CVC" />
        </Col>
      </Row>
    </KeyboardAvoidingView>
  );
}

const PaymentTab = props => {

  const { state } = props

  let iconStyle = styles.processIcon;
  let textStyle = styles.processText;

  if (state == "active") {
    iconStyle = [
      iconStyle,
      styles.processIconActive
    ]
    textStyle = [
      textStyle,
      styles.processTextActive
    ]
  }

  if (state == "done") {
    iconStyle = [
      iconStyle,
      styles.processIconDone
    ]
    textStyle = [
      textStyle,
      styles.processTextDone
    ]
  }

  return (
    <Col style={styles.processTabCol}>
      <Icon 
        name="card" 
        style={iconStyle}
      />
      <Text style={textStyle}>
        Ödeme
      </Text>
    </Col>
  )
}

PaymentTab.defaultProps = {
  active: false
}

PaymentTab.propTypes = {
  state: PropTypes.string
}

const PaymentFooter = props => {

  const { nextStep } = props;

  return (
    <Footer style={styles.footer}>
      <Button
        style={styles.footerButton}
        onPress={nextStep}
      >
        <Text style={styles.footerButtonText}>
          Ödeme Yap
        </Text>
      </Button>
    </Footer>
  )
}

PaymentFooter.propTypes = {
  nextStep: PropTypes.func.isRequired
}

export {
  Payment,
  PaymentTab,
  PaymentFooter
}