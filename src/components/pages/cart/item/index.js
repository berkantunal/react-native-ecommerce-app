import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import { View, Image, TouchableHighlight, TextInput } from 'react-native'
import { ListItem, Button, Icon, Text } from 'native-base'
import { Col, Row } from 'react-native-easy-grid'

// Styles
import styles from "./styles";

class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      qty: props.product.quantity ? props.product.quantity : 1
    }
  }

  static defaultProps = {
    type: "default"
  }

  static propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    navigation: PropTypes.object,
    product: PropTypes.object
  }

  changeQty = (type = "increase") => {
    let qty = this.state.qty;

    if (type == "decrease") {
      qty = qty - 1
    }

    if (type == "increase") {
      qty = qty + 1
    }

    if (qty < 1) {
      qty = 1;
    }

    this.setState({
      qty: qty
    });
  }

  render() {
    const {
      style,
      product,
      navigation
    } = this.props

    return (
      <ListItem style={[ styles.content, style ]}>
        <View style={styles.imageContent}>
          <TouchableHighlight 
            underlayColor="transparent" 
            onPress={() => navigation.navigate("Product", { product })}
          >
            <Image 
              resizeMode="contain" 
              source={{ uri: product.cover }} 
              style={styles.image}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.titleContent}>
          <Text style={styles.titleText}>
            {product.title}
          </Text>
        </View>
        <View style={styles.actionContent}>
          <Row style={styles.qtyButtonRow}>
            <Col style={styles.qtyButtonCol}>
              <Button
                style={[ styles.qtyButton, styles.qtyButtonLeft ]}
                onPress={() => this.changeQty("decrease")}
              >
                <Icon 
                  style={styles.qtyButtonIcon} 
                  name="remove"/>
              </Button>
            </Col>
            <Col style={styles.qtyInputCol}>
              <TextInput 
                value={this.state.qty.toString()} 
                style={styles.qtyInput}/>
            </Col>
            <Col style={styles.qtyButtonCol}>
              <Button
                style={[ styles.qtyButton, styles.qtyButtonRight ]}
                onPress={() => this.changeQty("increase")}
              >
                <Icon
                  style={styles.qtyButtonIcon}
                  name="add"/>
              </Button>
            </Col>
          </Row>
        </View>
      </ListItem>
    );
  }
}

export default withNavigation(Item);