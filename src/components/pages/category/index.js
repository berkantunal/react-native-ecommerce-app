import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Container, Content } from 'native-base'
import { AppHeader, ProductItem } from '~/components/common/'
import Filter from './filter/'

// Styles
import styles from './styles'


class Category extends Component {

  constructor(props) {
    super(props);

    const id = props.navigation.getParam("id");

    this.state = {
      id: id ? id : 25
    }
  }

  static propTypes = {
    navigation: PropTypes.object,
    product: PropTypes.object,
    filter: PropTypes.object,
    setFilters: PropTypes.func.isRequired,
    getProductsWithCategoryId: PropTypes.func,
    getCategoryFilters: PropTypes.func
  }

  static defaultProps = {
    filter: {}
  }

  componentDidMount = () => {
    const { id } = this.state
    const { 
      getProductsWithCategoryId,
      getCategoryFilters
    } = this.props

    getProductsWithCategoryId(id)
    getCategoryFilters(id)
  }

  setFilters = (filters) => {
    const { id } = this.state
    const { 
      setFilters,
      getProductsWithCategoryId
    } = this.props

    setFilters(filters)
    getProductsWithCategoryId(id, filters)
  }

  render() {
    const { id } = this.state,
          { list: productList } = this.props.product,
          filters = this.props.filter.list
    
    return (
      <Container style={styles.container}>
        <AppHeader>
          <Filter 
            filters={filters[id]} 
            setFilters={this.setFilters}
          />
        </AppHeader>
        <Content>
          <View style={{ flex: 1, flexWrap: "wrap", flexDirection: "row" }}>
            {
              productList[id] &&
              productList[id].map((_product, key) => (
                <ProductItem product={_product} key={key} type="category" />
              ))
            }
          </View>
        </Content>
      </Container>
    );
  }
}

export default Category