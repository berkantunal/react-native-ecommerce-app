import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from './containers/sidebar'

import Home from './containers/home'
import Category from './containers/category'
import Profile from './containers/customer/profile'

import Login from './containers/customer/login/'
import ForgotPassword from './containers/customer/forgot_password/'
import Register from './containers/customer/register/'

import Product from './containers/product'

import Cart from './containers/cart'
import Checkout from './containers/checkout'
import OrderDetail from './containers/order/detail/'

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Category: { screen: Category },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} /> // eslint-disable-line react/display-name
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    Login: { screen: Login },
    Register: { screen: Register },
    ForgotPassword: { screen: ForgotPassword },

    Product: { screen: Product },
    Cart: { screen: Cart },
    Checkout: { screen: Checkout },

    OrderDetail: { screen: OrderDetail },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const App = () => (
  <Root>
    <AppNavigator />
  </Root>
)

export default App