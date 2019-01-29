import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Content } from 'native-base'
import { AppHeader } from '~/components/common/'
import { Search, Banner, BannerContent } from '~/components/ui/'
import CategoryBanner from './banner/'
import Slider from './slider/'
import ProductSlider from './product/slider/'
import ProductScroll from './product/scroll/'
import Tabs from './tabs/'

// Styles
import styles from './styles'

class Home extends Component {

  componentDidMount() {
    this.props.get();
  }

  static propTypes = {
    get: PropTypes.func,
    homepage: PropTypes.object
  }

  getComponents(componentList) {
    let components = componentList.map((options, key) => {
      let subComponents

      if (options.components) {
        subComponents = this.getComponents(options.components);
      }

      switch (options.type) {
        case "slider":
          return (
            <Slider 
              key={key} 
              height={options.height} 
              images={options.images} 
            />
          )
        case "tabs":
          return (
            <Tabs 
              key={key} 
              categories={options.categories} 
            />
          )
        case "banner_content":
          return (
            <BannerContent 
              key={key} 
              style={{ marginTop: (options.marginTop ? options.marginTop : 0) }}
            >
              {subComponents}
            </BannerContent>
          )
        case "banner":
          return (
            <Banner 
              key={key} 
              image={{ uri: options.source }} 
              height={options.height} 
              col={options.col} 
            />
          )
        case "product_slider":
          return (
            <ProductSlider 
              key={key} 
              products={options.products} 
              title={options.title} 
              height={options.height} 
            />
          )
        case "category_banner":
          return (
            <CategoryBanner 
              key={key} 
              categories={options.categories} 
              col={options.col} 
              height={options.height} 
            />
          )
        case "product_scroll":
          return (
            <ProductScroll 
              key={key} 
              title={options.title} 
              products={options.products} 
            />
          )
      }
    });

    return components;
  }

  render() {

    const components = this.getComponents(this.props.homepage.list);

    return (
      <Container style={styles.container}>
        <AppHeader>
          <Search />
        </AppHeader>
        <Content>
          {components}
        </Content>
      </Container>
    )
  }
}

export default Home
