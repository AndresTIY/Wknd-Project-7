import api from '../api.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'


export default function categories(name){
  return (dispatch) => {
    dispatch({type:"START", name: name })
    return $.getJSON(api.url).then((data, success, xhr) =>{
      dispatch({type:"LOAD_DATA", data: data})

    })
  }




}
