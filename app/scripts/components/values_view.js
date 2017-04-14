import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


const ValuesView = React.createClass({
  render: function(){


    console.table(this.props.data);
    this.props.data.forEach((datum)=>{
      console.log(datum)
    })

    return (
      <div>
      {this.props.data.map((datum, index) => {
        return (<li key={index}>{datum.title}</li>);
      })}
      </div>
    )
  }
})
export default connect(container.allState)(ValuesView);
