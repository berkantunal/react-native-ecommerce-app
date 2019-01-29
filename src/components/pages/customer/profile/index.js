import React, { Component } from "react";
import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base'
import { AppHeader } from '~/components/common/'
import TabOrderList from './tabs/order/list/'
import TabProfile from './tabs/profile/'

// Styles
import styles from './styles'

class Profile extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader 
          type="context" 
          title="Hesabım"
        />
        <Content>
          <Tabs 
            tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
            renderTabBar={()=> <ScrollableTab style={{ backgroundColor: "white" }} />}
          >
            <Tab 
              tabStyle={styles.tab} 
              textStyle={styles.tabText} 
              activeTabStyle={styles.activeTabStyle} 
              activeTextStyle={styles.activeTextStyle} 
              heading="Profil"
            >
              <TabProfile />
            </Tab>
            <Tab 
              tabStyle={styles.tab} 
              textStyle={styles.tabText} 
              activeTabStyle={styles.activeTabStyle} 
              activeTextStyle={styles.activeTextStyle} 
              heading="Siparişlerim"
            >
              <TabOrderList />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default Profile;
