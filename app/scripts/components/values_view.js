import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


const ValuesView = React.createClass({



  render: function(){
    return (<div>
      <ul className="list">
        {this.props.datum.clues.slice(0,5).map((datum, i) => {
          if (datum.value === null){
            return <li key={i}>$600</li>
          }
          return <li key={i}>${datum.value}</li>
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
