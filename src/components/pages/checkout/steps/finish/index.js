import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text, Icon, Button } from 'native-base'
import { Col } from 'react-native-easy-grid'

// Styles
import styles from './styles'

const Finish = props => {
  const { navigation } = props

  return (
    <View style={styles.finishView}>
      <Icon 
        name="checkmark-circle" 
        style={[ styles.finishIcon ]}
      />
      <Text style={[ styles.finishText ]}>
        Siparişiniz Alındı!
      </Text>
      <Button
        style={[ styles.finishButton ]}
        onPress={() => {
          navigation.navigate('Profile')
        }}
      >
        <Text>
          Hesabım
        </Text>
      </Button>
    </View>
  )
}

Finish.propTypes = {
  navigation: PropTypes.object.isRequired
}

const FinishTab = props => {

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
        name="checkmark" 
        style={iconStyle}
      />
      <Text style={textStyle}>
        Tamamla
      </Text>
    </Col>
  )
}

FinishTab.defaultProps = {
  active: false
}

FinishTab.propTypes = {
  state: PropTypes.string
}

const FinishFooter = () => <View/>

export {
  Finish,
  FinishTab,
  FinishFooter
}