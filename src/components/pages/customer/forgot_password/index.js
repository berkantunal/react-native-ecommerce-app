import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'
import { Container, Text, Button } from 'native-base'
import { AppHeader } from '~/components/common/'
import { Input } from '~/components/ui/'

// Styles
import styles from './styles'

class ForgotPassword extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  render() {
    return (
      <Container style={styles.container}>
        <AppHeader 
          title="Şifremi Unuttum" 
          showBackButton 
          hideCart 
          hideLogin 
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.formContainer}
          enabled
        >
          <Input title="E mail" />
          <View>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Customer')}
            >
              <Text style={styles.buttonText}>
                Şifremi Gönder
              </Text>
            </Button>

            <TouchableOpacity
              style={styles.link}
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.linkText}>
                Giriş Yap
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default ForgotPassword
