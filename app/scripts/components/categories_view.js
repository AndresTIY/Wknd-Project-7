import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import ValuesView from './values_view.js'
import store from '../store.js'

const CatView = React.createClass({

  render: function(){
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
