const initialState = {
  startClick: false,
  name: '',
  points: '',
  data: [],
  modal: false

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
      var newData = state.data.slice();
      newData.push(action.data);
      return Object.assign({}, state, {
        data: newData
      });

    case "MODAL":
      return Object.assign({}, state, {
        modal: !state.modal
      })

    case "CURRENT_QUESTION":
      return Object.assign({}, state, {
        question: action.question,
        answer: action.answer,
        value: action.value
      })
      //CURRENT_QUESTION isn't doing anything, should assign
      // question, answer, value during MODAL case instead

    default:
      console.debug("Unhandled State");
      return state

  }



  return state;
}
