import api from '../api.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'

function mappedCats(){
  console.log(this.props.data);
}//end of it

export default connect(container.allState)(mappedCats)
