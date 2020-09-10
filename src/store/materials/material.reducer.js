const INITIAL_STATE = {
  list: [],

}
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'MATERIAL_GET':
            return { ...state, list: action.payload }
        default:
            return state
    }
}