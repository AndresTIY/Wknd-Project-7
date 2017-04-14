const initialState = {
  startClick: false,
  name: '',
  points: '',
  data: [],
  ids: null
}

export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case "START":
      return Object.assign({}, state, {
          startClick: !state.startClick,
          name: action.name
        });

    case "LOAD_DATA":
      // let currentData = state.data
      // currentData.push(action.data)
      // console.log("Load-data");

      var newData = state.data.slice();
      newData.push(action.data);

      return Object.assign({}, state, {
        data: newData
      })

    default:
      console.debug("Unhandled State");
      return state

  }



  return state;
}
