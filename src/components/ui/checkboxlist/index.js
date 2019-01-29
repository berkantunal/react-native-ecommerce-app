import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TouchableHighlight } from 'react-native'
import { List, ListItem, Text, Icon } from 'native-base'

// Styles
import styles from './styles'

class CheckboxList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItems: {},
    }
  }

  static defaultProps = {
    multiline: false,
    items: [],
    name: null,
    onChange: () => {}
  }

  static propTypes = {
    multiline: PropTypes.bool,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  
  selectItem = (key) => {

    const { 
      items,
      name
    } = this.props;

    let selectedItems = this.state.selectedItems;

    if (typeof selectedItems[key] == "undefined") {
      selectedItems[key] = items[key];
    } else {
      delete selectedItems[key];
    }

    this.setState({
      ...this.state,
      selectedItems
    })

    this.props.onChange(name, selectedItems);
  }

  render() {

    const iconStyle = styles.icon;
    const iconActiveStyle = [ iconStyle, styles.iconActive ];

    return (
      <List style={styles.checkboxlist}>
        {
          this.props.items.map((item, key) =>
            <ListItem style={styles.checkboxlistItem} key={key}>
              <TouchableHighlight style={styles.touchable} underlayColor="transparent" onPress={() => this.selectItem(item.key)}>
                <View style={styles.checkbox}>
                  <View style={styles.label}>
                    {
                      item.source &&
                      <Image resizeMode="contain" source={{ uri: item.source }} style={styles.image}/>
                    }
                    <Text style={styles.text}>{item.label}</Text>
                  </View>
                  <Icon 
                    name="checkmark" 
                    style={typeof this.state.selectedItems[item.key] == "undefined" ? iconStyle : iconActiveStyle}
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

export default CheckboxList