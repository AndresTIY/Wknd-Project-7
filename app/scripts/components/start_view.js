import React from 'react'
import categories from '../actions/load_categories'
import store from '../store.js'
const StartView = React.createClass({

  buttonClick: function(){
    store.dispatch(categories(this.refs.name.value))
  },
  render: function(){
    return (
    <div className="start-card">
      <input
      ref="name"
      placeholder="what is your name?"
      type="text">
      </input>
      <button
      onClick={this.buttonClick}>Click to Submit Your Name
      </button>
    </div>)
  }

})
export default StartView
