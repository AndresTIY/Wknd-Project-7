import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import MainView from './main_view.js'
import StartView from './start_view.js'

const AppRoot = React.createClass({
  render: function () {
    return (
      <section>
        <StartView />
      </section>
    );
  }
});

export default connect(container.allState)(AppRoot)
