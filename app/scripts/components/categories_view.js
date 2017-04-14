import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


// const CatView = React.createClass({
class CatView extends React.Component{
  constructor(props){
    super(props);
    this.state = {clicked: false}
    this.testClick.bind(this)
  }

  testClick(){
    this.state = {clicked: true}
  }



  render(){


    // let divClass = 'show-content';
    // if (!this.props.iChecked){
    //   divClass = 'hidden';
  // }


    return (
      <div className="cat">
        <h3>Category</h3>
        <ul className="list">

          <li onClick={this.testClick}>$200</li>
          <li>$400</li>
          <li>$600</li>
          <li>$800</li>
          <li>$1000</li>
        </ul>
      </div>
    )
  }


// })
}
export default connect(container.allState)(CatView);
