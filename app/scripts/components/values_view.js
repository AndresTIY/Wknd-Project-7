import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


const ValuesView = React.createClass({


  cluesMap: function(){


    // let clues = this.props.data.map((data)=>{
    //   return data.clues
    // })

    var valArr = this.props.data.map((data)=>{
      var val = data.clues.map((datum) => {
        return datum.value
      })
      return val
    })

    return valArr
  },


  render: function(){



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (<div>
            {this.props.data.map((data, index) => {
            return (<ul className="list">

              {data.clues.map((datum, i) => {
                return <li>{datum.value}</li>
              })}

            </ul>)

            }
          )}
        </div>
    )
  }
})
export default connect(container.allState)(ValuesView);


// {this.props.data.clues.map((datum, index) => {
//   return (<li key={index}>{datum}</li>);
// })}
