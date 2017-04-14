import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


const ValuesView = React.createClass({

  // this.props.data


  render: function(){
    console.table(this.props.data);
    // this.props.data.forEach((datum)=>{
    //   console.log(datum)
    // })

    console.log(this.props.data.length);
    return (
      <div>
      {this.props.questions.map((datum) => {
        return (<li>{datum.title}</li>);
      })}
      </div>
    )

  }

})
export default connect(container.allState)(ValuesView);
