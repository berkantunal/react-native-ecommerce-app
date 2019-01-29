import React, { Component } from 'react'
import { View } from 'react-native'
import { PropTypes } from 'prop-types'
import { Container, Content } from 'native-base'
import { Row } from 'react-native-easy-grid'
import { AppHeader } from '~/components/common/'
import { Shipment, ShipmentTab, ShipmentFooter } from './steps/shipment/'
import { Payment, PaymentTab, PaymentFooter } from './steps/payment/'
import { Finish, FinishTab, FinishFooter } from './steps/finish/'

// Styles
import styles from './styles'

class Checkout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: "shipment",
      shipment: "active",
      checkout: null,
      finish: null
    }
  }

  static propTypes = {
    navigation: PropTypes.object
  }
  nextStep = () => {
    let newState = {};

    if (this.state.step == "shipment") {
      newState = {
        step: "checkout",
        shipment: "done",
        checkout: "active"
      }
    }
    else if (this.state.step == "checkout") {
      newState = {
        step: "finish",
        checkout: "done",
        finish: "active"
      }
    }

    this.setState({
      ...this.state,
      ...newState
    });
  }

  render() {

    const { step, shipment, checkout, finish } = this.state
    const { navigation } = this.props
    
    return (
      <Container style={styles.container}>
        <AppHeader 
          hideCart 
          title="Teslimat Bilgileri"
        />
        <View style={styles.processTabContent}>
          <Row style={styles.processTabRow}>
            <ShipmentTab state={shipment}/>
            <PaymentTab state={checkout}/>
            <FinishTab state={finish}/>
          </Row>
        </View>
        <Content>
          { step == 'shipment' && <Shipment /> }
          { step == 'checkout' && <Payment /> }
          { step == 'finish' && <Finish navigation={navigation}/> }
        </Content>
        { step == 'shipment' && <ShipmentFooter nextStep={this.nextStep}/> }
        { step == 'checkout' && <PaymentFooter nextStep={this.nextStep}/> }
        { step == 'finish' && <FinishFooter /> }
      </Container>
    );
  }
}

export default Checkout