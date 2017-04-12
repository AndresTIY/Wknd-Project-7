const initialState = {
  startClick: false,
  name: '',
  points: ''
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

    default:
      return state

  }



  return state;
}
