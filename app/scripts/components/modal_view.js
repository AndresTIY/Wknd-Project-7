import React from 'react'
import allState from '../containers/all.js'
import store from '../store.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'


const ModalView = React.createClass({

  pass: function(){
    console.log('pass clicked');


  },

  submit: function(){
    console.log('submit clicked');
  },



  render: function(){

    return (
      <div>
      <div className="backdrop"></div>

        <div className="modal">
          <p>Question</p>
          <input
          type="text"
          placeholder="type in your answer">
          </input>
          <button onClick={this.submit}>Submit</button>
          <button onClick={this.pass}>Pass</button>

        </div>
      </div>

    )
  }

})

// export default PromptView;
export default connect(container.allState)(ModalView)
// export default ModalView;
