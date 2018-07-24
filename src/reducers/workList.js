const WorkList = (state = [{id:0, text:'123'}], action) => {
  switch (action.type) {
    case 'ADD_WORKS':
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ]
    default:
      return state
  }
}
export default WorkList