const initialState = {
  startClick: false,
  name: '',
  points: '',
  data: null,
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
    return Object.assign({}, state, {
      data: action.data
    })

    default:
      return state

  }



  return state;
}
