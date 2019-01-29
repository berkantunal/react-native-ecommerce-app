import React from 'react';
import PropTypes from 'prop-types'
import { View, Dimensions } from 'react-native';
import { Icon, Title, Text } from 'native-base';
import { ProductItem } from "~/components/common/"
import Carousel from 'react-native-looped-carousel';

// Styles
import styles from "./styles";

const { width } = Dimensions.get('window');

const SliderSingleItem = props => {

  const { title, products, delay, height } = props;

  let carouselHeight = height;
  
  if (!carouselHeight) {
    carouselHeight = (height / 2);
  }

  const items = products.map((item, key) => (
    <View style={styles.contentContainer} key={key}>
      <View style={styles.itemContent}>
        <ProductItem product={item}/>
      </View>
    </View>
  ));

  return (
    <View>
      {
        title &&
        <Title style={styles.title}>
          <Text style={styles.titleText}>
            {title}
          </Text>
        </Title>
      }
      <Carousel
        delay={delay}
        style={{ flex: 1, width: width, height: carouselHeight }}
        autoplay={false}
        arrows
        leftArrowText={<Icon style={styles.arrowIconStyle} name='arrow-dropleft-circle'/>}
        rightArrowText={<Icon style={styles.arrowIconStyle} name='arrow-dropright-circle'/>}
        leftArrowStyle={styles.leftArrowStyle}
        rightArrowStyle={styles.rightArrowStyle}
        >
          {items}
      </Carousel>
    </View>
  )
}

SliderSingleItem.defaultProps = {
  height: 320,
  delay: 5000,
  title: null,
  ids: []
}

SliderSingleItem.propTypes = {
  height: PropTypes.number.isRequired,
  delay: PropTypes.number,
  title: PropTypes.string,
  ids: PropTypes.array,
  products: PropTypes.array
}

export default SliderSingleItem;
