import React from 'react'
import { Provider } from 'react-redux'
import store from '~/store/'
import App from '../App'

const Setup = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Setup