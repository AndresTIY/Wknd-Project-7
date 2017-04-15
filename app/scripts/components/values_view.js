import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import ModalView from './modal_view.js'
import store from '../store.js'



const ValuesView = React.createClass({

  modalPopUp: function(e, category){
    console.log(e.target, category);
    store.dispatch({type:"MODAL"})
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
                      <div className={hideClass}><ModalView /></div>
                    <li onClick={this.modalPopUp} key={i}>$600</li>
                  </div>
          }
          return   <div>
                    <div className={hideClass}><ModalView /></div>
                    <li onClick={this.modalPopUp} key={i}>${data.value}</li>
                  </div>

        })}
      </ul>
        </div>
    )
  }
})
export default connect(container.allState)(ValuesView);


// {this.props.data.clues.map((datum, index) => {
//   return (<li key={index}>{datum}</li>);
// })}

// <div className={hideClass}>
//   <ModalView
//   category = {currentCategory}
//   datum = {datum}/>
// </div>
