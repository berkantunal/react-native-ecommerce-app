import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView } from 'react-native'
import { Text, Icon, Footer, Button } from 'native-base'
import { Col } from 'react-native-easy-grid'
import { Input, Select } from '~/components/ui/'

// Styles
import styles from './styles'

const Shipment = () => {
  return (
    <KeyboardAvoidingView 
      behavior="padding" 
      contentContainerStyle={styles.formContainer} 
      enabled
    >
      <Input title="Ad" />
      <Input title="Soyad" />
      <Input title="Telefon"/>
      <Select title="İl" />
      <Select title="İlçe" />
      <Input
        multiline={true}
        title="Adres"
      />
      <Input title="Adres Adı"/>
    </KeyboardAvoidingView>
  )
}

const ShipmentTab = props => {

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
        name="truck" 
        type="FontAwesome" 
        style={iconStyle}
      />
      <Text style={textStyle}>Teslimat</Text>
    </Col>
  )
}

ShipmentTab.defaultProps = {
  active: false
}

ShipmentTab.propTypes = {
  state: PropTypes.string
}

const ShipmentFooter = props => {

  const { nextStep } = props;

  return (
    <Footer style={styles.footer}>
      <Button
        style={styles.footerButton}
        onPress={nextStep}
      >
        <Text style={styles.footerButtonText}>
          Devam Et
        </Text>
      </Button>
    </Footer>
  )
}

ShipmentFooter.propTypes = {
  nextStep: PropTypes.func.isRequired
}

export {
  Shipment,
  ShipmentTab,
  ShipmentFooter
}