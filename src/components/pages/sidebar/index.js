import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge } from 'native-base'

import styles from './styles'

import drawerCover from '~/assets/drawer-cover.png'
import drawerImage from '~/assets/logo.png'

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    menu: PropTypes.object,
    getNavigation: PropTypes.func,
    navigation: PropTypes.object
  }

  componentDidMount = () => {
    this.props.getNavigation();  
  }
  
  getNavigation = () => {
    const { list } = this.props.menu;

    return list;
  }

  render() {

    const datas = this.getNavigation();
    
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              (
                data.title ?
                  <ListItem
                    itemHeader
                    noBorder
                    style={styles.title}
                  >
                    <Left>
                      {
                        data.icon &&
                        <Icon
                          active
                          name={data.icon}
                          style={{ color: "#777", fontSize: 26, width: 30 }}
                        />
                      }
                      <Text style={styles.text}>{data.name}</Text>
                    </Left>
                  </ListItem>
                :
                  <ListItem
                    button
                    noBorder
                    onPress={() => this.props.navigation.navigate(data.route, data.params)}
                  >
                    <Left>
                      {
                        data.icon &&
                        <Icon
                          active
                          name={data.icon}
                          style={{ color: "#777", fontSize: 26, width: 30 }}
                        />
                      }
                      <Text style={{ ...styles.text, marginLeft: (data.sub ? 20 : 0)}}>
                        {data.name}
                      </Text>
                    </Left>
                    {data.types &&
                      <Right style={{ flex: 1 }}>
                        <Badge
                          style={{
                            borderRadius: 3,
                            height: 25,
                            width: 72,
                            backgroundColor: data.bg
                          }}
                        >
                          <Text
                            style={styles.badgeText}
                          >{`${data.types} Types`}</Text>
                        </Badge>
                      </Right>}
                  </ListItem>
              )
            }
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar
