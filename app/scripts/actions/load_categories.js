import api from '../api.js'
import { connect } from 'react-redux'
import container from '../containers/all.js'


export default function categories(name){
  return (dispatch) => {
    dispatch({type:"START", name: name })
    return $.getJSON(
      api.url + '/categories/?count=6'
    ).then((data, success, xhr) =>{
      let ids = data.map((current, i, arr)=>{
        return $.getJSON(
          api.url + '/category/?id=' + current.id
        ).then((data)=>{
          dispatch({type:"LOAD_DATA", data: data})

        })
      })

      // dispatch({type:"LOAD_DATA", ids: ids, data: data})

    })
  }
}
// 11509
// 11545
// 11497
// 11498
// 11542
