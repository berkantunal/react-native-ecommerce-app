import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView, TouchableOpacity, View, Image } from 'react-native'
import { Container, Text, Button, Icon } from 'native-base'
import { Input } from '~/components/ui/'

// Styles
import styles from './styles'

import Logo from '~/assets/logo.png'

class Login extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.logoContainer}>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            style={styles.backButton}
          >
            <Icon 
              name="arrow-back" 
              style={styles.menuIcon}
            />
          </Button>
          <Image 
            resizeMode="contain" 
            source={Logo} 
            style={styles.logo}
          />
        </View>
        <KeyboardAvoidingView 
          behavior="padding" 
          style={styles.formContainer} 
          enabled
        >
          <Input title="Username" />
          <Input title="Password" />
          <View>
            <Button
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Customer');
              }}
            >
              <Text style={styles.buttonText}>
                Giriş
              </Text>
            </Button>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text style={styles.linkText}>
                Üye ol
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.link}
              onPress={() => this.props.navigation.navigate('ForgotPassword')}
            >
              <Text style={styles.linkText}>
                Şifreni mi unuttun?
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Login
