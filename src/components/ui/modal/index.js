import React from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'react-native'
import { Container, Button, Icon, Text, Header, Left, Right } from 'native-base'

import styles from "./styles";

const UIModal = props => {
  const {
    title,
    children,
    visibility,
    closeEvent
  } = props
  
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visibility}
    >
      <Container style={styles.modalContainer}>
        <Header 
          style={styles.header} 
          iosBarStyle={"light-content"} 
          noShadow
        >
          <Left>
            <Text style={styles.headerTitle}>
              {title}
            </Text>
          </Left>
          <Right>
            <Button
              iconLeft
              style={styles.modalCloseButton}
              light
              onPress={() => { 
                closeEvent()
              }}
            >
              <Icon 
                name="close" 
                style={styles.modalCloseButtonIcon}
              />
            </Button>
          </Right>
        </Header>
        {children}
      </Container>
    </Modal>
  )
}

UIModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
  visibility: PropTypes.bool.isRequired,
  closeEvent: PropTypes.func.isRequired
}

export default UIModal
