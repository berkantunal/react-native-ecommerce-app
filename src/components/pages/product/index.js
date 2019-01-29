import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { Container, Text, Content, List, ListItem, Left, Icon, Tab, Tabs, ScrollableTab } from 'native-base'
import { AppHeader } from '~/components/common/'
import Images from './images/'

// Styles
import styles from './styles'

import { Col, Grid } from 'react-native-easy-grid'

class ProductItem extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  render() {

    const product = this.props.navigation.getParam("product")
    
    return (
      <Container style={styles.container}>
        <AppHeader 
          type="context" 
          title="Huawei"
          showBackButton
        />
        <Content>
          <Text style={styles.title}>
            {product.title}
          </Text>
          <Text 
            style={styles.shortDescription} 
            note
          >
            {product.shortDescription}
          </Text>
          <Images images={product.images}/>
          <Grid style={styles.priceContent}>
            {
              product.percentage &&
              <Col style={styles.percentageContent}>
                <Text style={styles.percentage}>
                  {product.percentage}%
                </Text>
              </Col>
            }
            <Col style={styles.priceCol}>
              {
                product.oldPrice &&
                <Text style={styles.oldPrice}>
                  {product.oldPrice} TL
                </Text>
              }
              <Text style={styles.price}>
                {product.price} TL
              </Text>
            </Col>
            {
              product.freeShipping && 
              <Col style={styles.shipment}>
                <Icon 
                  name="truck" 
                  type="FontAwesome" 
                  style={styles.shipmentIcon}
                />
                <Text style={styles.shipmentText}>
                  Ücretsiz Kargo
                </Text>
              </Col>
            }
          </Grid>
          <Tabs 
            tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
            renderTabBar={()=> <ScrollableTab style={{ backgroundColor: "white" }} />}
          >
            <Tab 
              tabStyle={styles.tab} 
              textStyle={styles.tabText} 
              activeTabStyle={styles.activeTabStyle} 
              activeTextStyle={styles.activeTextStyle} 
              heading="Açıklama"
            >
              <ScrollView style={styles.tabDescriptionContent}>
                <Text style={styles.description}>
                  {product.description}
                </Text>
              </ScrollView>
            </Tab>
            {
              product.properties &&
              <Tab 
                tabStyle={styles.tab} 
                textStyle={styles.tabText} 
                activeTabStyle={styles.activeTabStyle} 
                activeTextStyle={styles.activeTextStyle} 
                heading="Özellikler"
              >
                <ScrollView style={styles.properties}>
                  <List>
                    {
                      product.properties.map((property, key) => (
                        <ListItem 
                          key={key} 
                          style={styles.propertyItem}
                        >
                          <Left>
                            <Text style={styles.propertyTitle}>
                              {property.title}
                            </Text>
                          </Left>
                          <Left>
                            <Text style={styles.propertyValue}>
                              {property.value}
                            </Text>
                          </Left>
                        </ListItem>
                      ))
                    }
                  </List>
                </ScrollView>
              </Tab>
            }
          </Tabs>
        </Content>
      </Container>
    )
  }
}

export default ProductItem
