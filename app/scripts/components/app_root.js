import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import MainView from './main_view.js'
import StartView from './start_view.js'

const AppRoot = React.createClass({
  render: function () {

    let hideClass = "hide-content"
    let showClass = "show-content"
    if (this.props.startClick){
      hideClass = "show-content"
      showClass = "hide-content"
    }




    return (
      <section>

        <div className={showClass}>
          <StartView />
        </div>

        <div className={hideClass}>
          <MainView />
        </div>

      </section>

    );
  }
});

export default connect(container.allState)(AppRoot)
