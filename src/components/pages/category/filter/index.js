import React, { Component } from "react"
import PropTypes from "prop-types"
import { View } from 'react-native'
import { Button, Icon, Text } from "native-base"
import ModalFilter from './modals/filter/'
import ModalSorter from './modals/sorter/'

import styles from './styles'

class Filter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sorterModalVisibility: false,
      filterModalVisibility: false
    }
  }

  static propTypes = {
    filters: PropTypes.array,
    setFilters: PropTypes.func.isRequired
  }

  changeVisibility = (type, visiblility) => {

    const state = this.state;

    if (type == "sorter") {
      state.sorterModalVisibility = visiblility
    } else if (type == "filter") {
      state.filterModalVisibility = visiblility
    } 

    this.setState(state)
  }

  render() {

    const { 
      filters,
      setFilters
    } = this.props;
    const { 
      sorterModalVisibility, 
      filterModalVisibility
    } = this.state;
    
    return (
      <View style={styles.filterRow}>
        <ModalSorter 
          visibility={sorterModalVisibility} 
          closeEvent={() => { 
            this.changeVisibility("sorter", false) 
          }} 
        />
        <ModalFilter 
          filters={filters} 
          setFilters={setFilters}
          visibility={filterModalVisibility} 
          closeEvent={() => { 
            this.changeVisibility("filter", false) 
          }} 
        />
        <Button
          light
          style={{ ...styles.filterButton, ...styles.filterButtonLeft }}
          onPress={() => { this.changeVisibility("sorter", true) }}
        >
          <Text style={styles.filterButtonText}>Sırala</Text>
          <Icon
            style={styles.filterButtonIcon}
            type="FontAwesome"
            name="sort">
          </Icon>
        </Button>
        <Button
          light
          style={{ ...styles.filterButton, ...styles.filterButtonRight }}
          onPress={() => { this.changeVisibility("filter", true) }}
          >
          <Text style={styles.filterButtonText}>Filtrele</Text>
          <Icon
            style={styles.filterButtonIcon}
            type="FontAwesome"
            name="filter">
          </Icon>
        </Button>
      </View>
    );
  }
}

export default Filter
