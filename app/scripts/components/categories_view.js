import React from 'react'
const CatView = React.createClass({
  render: function(){
    return (
      <div className="cat">
        <h3>Category</h3>
        <ul className="list">
          <li>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
      </div>
    )
  }


})
export default CatView;