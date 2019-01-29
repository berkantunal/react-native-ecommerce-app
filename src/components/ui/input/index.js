import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput } from 'react-native'
import { Label } from 'native-base'

// Styles
import styles from './styles'

const Input = props => {
  const { 
    style, 
    title,
    value,
    multiline,
    onChange,
    name
  } = props

  let inputStyle = { ...styles.input }

  if (props.multiline) {
    inputStyle = {
      ...styles.input,
      ...styles.multilineInput
    }
  }
  
  return (
    <View style={[ styles.view, style ]}>
      <Label style={styles.label}>{title}</Label>
      <TextInput 
        multiline={multiline === undefined ? false : true} 
        value={value} 
        onChangeText={text => { onChange(name, text) }} 
        style={inputStyle} 
      />
    </View>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  onChange: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
  multiline: PropTypes.bool,
  name: PropTypes.string
}

export default Input;
