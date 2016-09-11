import { combineReducers } from 'redux';

const toggleLoading = (state=false, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        loading: !state.loading
      }
    default:
      return state;
  }
}

const leafStatus = (state=0, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        id: action.id,
        status: action.status,
      }
    default:
      return state;
  }
}

const leafList = (state={}, action) => {
  switch (action.type) {
    case 'ADD_LEAF':
      let leaf = {};
      const id = action.id;
      leaf[id] = action.leaf;
      return Object.assign({}, state, leaf);
    default:
      return state;
  }
}

const AppReducers = combineReducers({
  toggleLoading,
  leafStatus,
  leafList,
});

export default AppReducers;
