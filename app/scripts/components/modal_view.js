import React from 'react'
import allState from '../containers/all.js'
import store from '../store.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'


const ModalView = React.createClass({
  getInitialState: function(){
    let question;
    let answer;
    let currentValue = "value retrieved from categories_view"
    let currentCategory = this.props.category;
    // console.log(title); gives us all 6 titles
    //how do we figure out current title?
    //having current value would also be helpful
    this.props.datum.clues.forEach((data, i)=>{
      if (currentCategory ){
        //if currentCategory, find currentValue
        //that should narrow down specific question and answer
        question = data.question;
        answer = data.answer;
      }
    })
    return {
      question: question,
      answer: answer,
      value: currentValue
    }
  },


  pass: function(){
    console.log('pass clicked');
    store.dispatch({type:"MODAL"})
  },
  submit: function(){
    console.log('submit clicked');
    store.dispatch({type:"MODAL"})

  },
  questions: function(){
    this.props.datum.clues.slice(0,5).map((datum, i)=>{
      return datum.question
    })

  },
  //this is doing nothing so far

  render: function(){
    console.log(this.getInitialState())
    return (
      <div>
        <div className="modal">
        {this.props.datum.clues.map((datum, i)=>{
          return <p>{datum.question}</p>
        })}
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
