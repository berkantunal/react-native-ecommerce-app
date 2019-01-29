import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight } from 'react-native'
import { List, ListItem, Text, Icon } from 'native-base'

// Styles
import styles from './styles'

class RadioList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: {},
    }
  }

  static defaultProps = {
    items: [],
    name: null,
    onChange: () => {}
  }

  static propTypes = {
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  
  selectItem = (key) => {

    const { 
      items, 
      name 
    } = this.props;

    let selectedItem = items[key];

    this.setState({
      ...this.state,
      selectedItem
    })

    this.props.onChange(name, this.state.selectedItem);
  }

  render() {

    const iconStyle = styles.icon;
    const iconActiveStyle = [ iconStyle, styles.iconActive ];

    return (
      <List style={styles.radiolist}>
        {
          this.props.items.map((item, key) =>
            <ListItem style={styles.radioItem} key={key}>
              <TouchableHighlight style={styles.touchable} underlayColor="transparent" onPress={() => this.selectItem(item.key)}>
                <View style={styles.radio}>
                  <Text style={styles.text}>{item.label}</Text>
                  <Icon 
                    name="ios-checkmark-circle" 
                    style={this.state.selectedItem.key == item.key ? iconActiveStyle : iconStyle}
                  />
                </View>
              </TouchableHighlight>                  
            </ListItem>
          )
        }
      </List>
    );
  }
}

export default RadioList;