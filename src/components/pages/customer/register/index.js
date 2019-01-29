import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native'
import { Container, Text, Button } from 'native-base'
import { AppHeader } from '~/components/common/'
import { Input } from '~/components/ui/'

// Styles
import styles from './styles'

class Register extends Component {
  
  static propTypes = {
    navigation: PropTypes.object
  }
  
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader 
          title="Üye Ol" 
          showBackButton 
          hideCart 
          hideLogin 
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.formContainer}
          enabled>
          <Input title="Ad Soyad" />
          <Input title="E mail" />
          <Input title="Şifre" />
          <Input title="Şifre Tekrar" />
          <View>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Customer')}
            >
              <Text style={styles.buttonText}>
                Kayıt Ol
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

export default Register
