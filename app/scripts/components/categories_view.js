import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import ValuesView from './values_view.js'

const CatView = React.createClass({
  render: function(){
    return (
        <div>
          {this.props.data.map((datum, index) => {
            return (
              <div className="cat" key={index}>
                <h3>{datum.title}</h3>
              </div>
            )
          })}
          <ValuesView />
        </div>
    )
  }
})

export default connect(container.allState)(CatView);
// <li onClick={this.testClick}>$200</li>
// let divClass = 'show-content';
// if (!this.props.iChecked){
//   divClass = 'hidden';
// }
// {this.props.questions.map((datum) => {
//   return (<h3>{datum.title}</h3>);
// })}

// <div className="cat">
// <div>
//   <h3>categories</h3>
//
// </div>
//   <ul className="list">
//   </ul>
// </div>
// )
// <ul className="list">
