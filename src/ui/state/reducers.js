import { combineReducers } from 'redux'

const toggleLoading = (state=false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        loading: !state.loading
      }
    default:
      return state
  }
}



const AppReducers = combineReducers({
  toggleLoading
});

export default AppReducers;
