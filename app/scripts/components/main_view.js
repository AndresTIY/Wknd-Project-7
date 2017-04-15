import React from 'react'
import CatView from './categories_view.js'
import HeaderView from './header_view.js'
import ModalView from './modal_view.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'

const MainView = React.createClass({



  render: function(){


    return (
      <div className="main-card">
        <HeaderView />
        <div className="categories-card">
          <CatView />
        </div>

      </div>
    )
  }




})//end

export default connect(container.allState)(MainView)
