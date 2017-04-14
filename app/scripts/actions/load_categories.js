import api from '../api.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'


export default function categories(name){

  return (dispatch) => {
    dispatch({type:"START", name: name })
    return $.getJSON(
      api.url + '/categories/?count=6'
    ).then((data, success, xhr) =>{
      console.log("Starting Second AJAX")
      data.forEach((current, i, arr) => {
        $.getJSON(
          api.url + '/category/?id=' + current.id
        ).then((data) => {
          console.log("Dispatching load data")
          dispatch({
            type:"LOAD_DATA",
            data: data})
        })
      })
    })
  }
}
