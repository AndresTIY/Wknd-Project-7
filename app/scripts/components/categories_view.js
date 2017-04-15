import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import ValuesView from './values_view.js'
import ModalView from './modal_view.js'
import store from '../store.js'

const CatView = React.createClass({


  modalPopUp: function(e, category){
    console.log(e.target, category);
    store.dispatch({type:"MODAL"})
  },
  //how do we get this function to grab the current category?
  //also want current value
  //dom traversal?
  //if grabbed, dispatch currentCategory and currentValue to global state
  //modal_view creates a local state based on currentCategory


  render: function(){

    let showClass = "show-content"
    let hideClass = "hide-content"
    if (this.props.modal){
      showClass = "hide-content"
      hideClass = "show-content"
    }

    return (
        <div>
          {this.props.data.map((datum, index) => {
            return (
              <div id="catt" className="cat" key={index}>
                <h3>{datum.title}</h3>
                <div onClick={this.modalPopUp}>
                  <ValuesView datum={datum} />
                </div>
                <div className={hideClass}>
                  <ModalView
                  category = {datum.title}
                  datum = {datum}/>
                </div>
              </div>
            )
          })}
        </div>
    )
  }
})

export default connect(container.allState)(CatView);
// <div onClick={this.modalPopUp(datum.title)}> does not retrieve current title
