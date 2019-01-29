import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Text, Content, Footer } from 'native-base'
import { CheckboxList, Input, Panel, RadioList, Modal } from '~/components/ui/'

import styles from './styles'

class ModalFilter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: {}
    };
  }
  
  static propTypes = {
    filters: PropTypes.array,
    setFilterModalVisible: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired
  }
  
  static defaultProps = {
    filters: []
  }

  setFilter = (name, value) => {
    const state = { 
      ...this.state 
    }
    state.filters[name] = value

    this.setState(state)
  }

  getFilterItems = () => {

    const { filters } = this.props;
    
    if (!filters) return;

    let panels = filters.map((filter, key) => (
      <Panel 
        key={key}
        title={filter.title} 
        maxHeight={filter.maxHeight}
      >
        {
          filter.items.map((item, itemKey) => {
            switch (item.type) {
              case "checkboxlist":
                return (
                  <CheckboxList 
                    key={itemKey}
                    onChange={this.setFilter}
                    name={item.name}
                    items={item.values}
                  />
                )
              case "radiolist":
                return (
                  <RadioList
                    key={itemKey}
                    onChange={this.setFilter} 
                    name={item.name}
                    items={item.values}
                  />
                )
              case "input":
                return (
                  <Input 
                    key={itemKey}
                    onChange={this.setFilter} 
                    name={item.name}
                    title={item.title} 
                    style={[ styles.input, styles.inputSizes[item.size] ]}
                  />
                )
            }
          })
        }
      </Panel>
    ))

    return panels;
  }

  apply = () => {
    this.props.closeEvent()
    this.props.setFilters(this.state.filters)
  }
  
  render() {

    const filters = this.getFilterItems();
    const { 
      visibility,
      closeEvent
     } = this.props

    return (
      <Modal 
        visibility={visibility}
        title="Filtre"
        closeEvent={closeEvent}
      >
        <Content style={styles.modalContent}>
          {filters}
        </Content>
        <Footer 
          style={styles.footer} 
          iosBarStyle={"light-content"} 
          noShadow
        >
          <Button 
            style={styles.footerButton}
            onPress={this.apply}
          >
            <Text style={styles.footerButtonText}>
              Uygula
            </Text>
          </Button>
        </Footer>
      </Modal>
    )
  }
}

ModalFilter.propTypes = {
  closeEvent: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired
}

export default ModalFilter