import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

const HeaderView = React.createClass({
  grabName: function(){
    return this.props.name
  },
  render: function(){
    return(
      <header>
        <h1>Welcome to Jeopardy {this.grabName()} !</h1>
      </header>
    )
  }
})
export default connect(container.allState)(HeaderView)
