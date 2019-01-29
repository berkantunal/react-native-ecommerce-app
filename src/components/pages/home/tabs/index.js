import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Tab, Tabs, ScrollableTab } from 'native-base'
import { ProductItem } from "~/components/common/"

// Styles
import styles from './styles'

const CategoryTabs = props => {
  const { categories } = props
  
  const tabs = categories.map((item, key) => (
    <Tab 
      tabStyle={styles.tab} 
      textStyle={styles.tabText} 
      activeTabStyle={styles.activeTabStyle} 
      activeTextStyle={styles.activeTextStyle} 
      heading={item.title}
      key={key}
    >
      <View style={styles.itemContent}>
        {
          item.products.map((product, productKey) => (
            <ProductItem 
              key={productKey}
              product={product}
            />
          ))
        }
      </View>
    </Tab>
    )
  )

  return (
    <Tabs 
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
      renderTabBar={
        () => <ScrollableTab style={{ backgroundColor: "white" }} />
      }
    >
      {tabs}
    </Tabs>
  )
}

CategoryTabs.propTypes = {
  categories: PropTypes.array
}

export default CategoryTabs;
