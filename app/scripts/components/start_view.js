import React from 'react'
const StartView = React.createClass({
  render: function(){
    return (
    <div className="start-card">
      <input
      placeholder="what is your name?"
      type="text">
      </input>
      <button>Click to Submit Your Name</button>
    </div>)
  }

})
export default StartView
