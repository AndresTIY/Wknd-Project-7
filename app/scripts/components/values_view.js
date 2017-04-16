import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import ModalView from './modal_view.js'
import store from '../store.js'
import CategoriesView from './categories_view.js'



const ValuesView = React.createClass({
  modalPopUp: function(value){
    store.dispatch({type:"MODAL_TOGGLE", category: value})
  },
  render: function(){
    let showClass = "show-content"
    let hideClass = "hide-content"
    if (this.props.modal){
      showClass = "hide-content"
      hideClass = "show-content"
    }
    return (<div>
      <ul className="list">
        {this.props.datum.clues.slice(0,5).map((data, i) => {
          if (data.value === null){
            return <div>
                    <div className={hideClass}>
                      <ModalView
                      category = {this.props.category}
                      question = {data.question}
                      answer = {data.answer}
                      value ={data.value} />
                    </div>
                    <li onClick={this.modalPopUp} key={i}>$600</li>
                  </div>
          }
          return   <div>
                    <div className={hideClass}>
                      <ModalView
                      category = {this.props.category}
                      question = {data.question}
                      answer = {data.answer}
                      value ={data.value}/>
                    </div>
                    <li
                    category = {this.props.category}
                    onClick={this.modalPopUp} key={i}>${data.value}</li>
                  </div>
        })}
      </ul>
        </div>
    )
  }
})
export default connect(container.allState)(ValuesView);
