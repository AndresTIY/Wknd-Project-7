import React from 'react'
import CatView from './categories_view.js'
import HeaderView from './header_view.js'
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

export default MainView;
