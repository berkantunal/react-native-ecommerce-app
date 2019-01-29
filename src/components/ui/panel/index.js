import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, View, TouchableHighlight } from 'react-native'
import { Text, Icon } from 'native-base'

// Styles
import styles from './styles'

class Input extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: new Animated.Value(0),
      maxHeight: 200,
      isShow: false
    }
  }

  static defaultProps = {
    maxHeight: 200
  }

  static propTypes = {
    maxHeight: PropTypes.number,
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
  }

  componentDidMount = () => {
    this.setHeight();
  }

  setShow = (state) => {
    this.setState({
      ...this.state,
      isShow: state
    })
  }

  setHeight() {
  }

  startAnimation = () => {
    let toValue;
    
    if (this.state.isShow) {
      toValue = 0;
      this.setShow(false);
    } else {
      toValue = this.state.maxHeight;
      this.setShow(true);
    }
 
    Animated.timing(
      this.state.height,
      {
        toValue: toValue,
        duration: 500,
      }
    ).start();
  }

  render() {

    const { title } = this.props;
    const { isShow } = this.state;

    return (
      <View style={styles.view}>
        <TouchableHighlight underlayColor="transparent" onPress={() => { this.startAnimation() }}>
          <View style={styles.titleContent}>
            <Text style={styles.title}>{title}</Text>
            {
              isShow ? 
              <Icon 
                name="arrow-up" 
                style={styles.titleIcon}
              /> : 
              <Icon 
                name="arrow-down" 
                style={styles.titleIcon}
              />
            }
          </View>
        </TouchableHighlight>
        <Animated.ScrollView style={[ styles.animated, { height: this.state.height } ]}>
          <View style={styles.childContent}>
            {this.props.children}
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

export default Input;