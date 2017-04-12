import React from 'react'
import CatView from './categories_view.js'
const MainView = React.createClass({

  render: function(){
    return (
      <div className="main-card">
        <div className="categories-card">
          <CatView />
          <CatView />
          <CatView />
          <CatView />
          <CatView />
          <CatView />
        </div>
      </div>
    )
  }




})//end

export default MainView;
