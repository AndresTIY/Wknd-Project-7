import store from './store.js'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AppRoot from './components/app_root.js'


export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={AppRoot} />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}
