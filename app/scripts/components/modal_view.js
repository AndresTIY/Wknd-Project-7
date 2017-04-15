import React from 'react'
import allState from '../containers/all.js'
import store from '../store.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import mappedCats from '../actions/map_categories.js'
import ValuesView from './values_view.js'


const ModalView = React.createClass({
  //
  // getInitialState: function(){
  //
  //   return {
  //     getData: this.props.category,
  //
  //   }
  // },


  pass: function(){
    console.log('pass clicked');
    store.dispatch({type:"MODAL"})
  },
  submit: function(){
    console.log('submit clicked');
    store.dispatch({type:"MODAL"})

  },
  // questions: function(){
  //   this.props.datum.clues.slice(0,5).map((datum, i)=>{
  //     return datum.question
  //   })
  //
  // },
  //this is doing nothing so far

  render: function(){


    return (
      <div>
        <div className="modal">
          <p>question goes here</p>
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

// {this.props.datum.clues.map((datum, i)=>{
//   return <p>{datum.question}</p>
// })}
