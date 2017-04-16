import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import ValuesView from './values_view.js'
import ModalView from './modal_view.js'
import store from '../store.js'

const CatView = React.createClass({


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
              <div className="cat" key={index}>
                <h3>{datum.title}</h3>
                  <ValuesView
                  category = {datum.title}
                  datum={datum} />
              </div>
            )
          })}
        </div>
    )
  }
})

export default connect(container.allState)(CatView);
// <div onClick={this.modalPopUp(datum.title)}> does not retrieve current title
