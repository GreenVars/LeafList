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

const leafStatus = (state={}, action) => {
  switch (action.type) {
    case 'SET_STATUS':
      const currentLeaf = state[action.id];
      let deltaStatus = action.status;
      if(action.status === currentLeaf.status) {
        deltaStatus = -action.status;
        action.status = 0;
      } else {
        deltaStatus = currentLeaf.status === 0 ? action.status : 2 * deltaStatus;
      }
      let toChange = {};
      toChange[action.id] = Object.assign({}, currentLeaf, {
        status: action.status,
        count: currentLeaf.count + deltaStatus
      });
      return Object.assign({}, state, toChange);
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
    case 'SET_STATUS':
      return leafStatus(state, action);

    default:
      return state;
  }
}

const AppReducers = combineReducers({
  toggleLoading,
  leafList,
});

export default AppReducers;
