import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, View, TouchableHighlight } from 'react-native'
import { Label, Button, Container, List, ListItem, Text, Icon } from 'native-base'

// Styles
import styles from './styles'

class SelectBox extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      modalVisible: false,
      buttonText: "Seçiniz",
      items: [
        { key: 0, label: 'Fruits', value:'some value' },
        { key: 1, label: 'Fruits', value:{this: "could", be:"anything"} },
      ]
    }
  }

  static propTypes = {
    title: PropTypes.string
  }

  selectItem(key) {
    this.setState({
      ...this.state,
      buttonText: this.state.items[key].label
    });

    this.setModalVisible(false);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {

    const { title } = this.props;

    return (
      <View style={styles.view}>
        <Label style={styles.label}>{title}</Label>
        <Button
          style={styles.selectBoxButton}
          onPress={() => { this.setModalVisible(true) }}
        >
          <Text style={styles.selectBoxButtonText}>{this.state.buttonText}</Text>
        </Button>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
          }}>
          <Container style={styles.modalContainer}>
            <View>
              <List style={styles.modalList}>
                {
                  this.state.items.map((item, key) =>
                    <ListItem key={key}>
                      <TouchableHighlight underlayColor="transparent" onPress={() => this.selectItem(item.key)}>
                        <Text>{item.label}</Text>
                      </TouchableHighlight>
                    </ListItem>
                  )
                }
              </List>
              <Button
                iconLeft
                style={styles.modalCloseButton}
                light
                onPress={() => { this.setModalVisible(false) }}
              >
                <Icon name="close" style={styles.modalCloseButtonIcon}/>
                <Text style={styles.modalCloseButtonText}>Kapat</Text>
              </Button>
            </View>
          </Container>
        </Modal>
      </View>
    );
  }
}

export default SelectBox