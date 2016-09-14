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

const branchList = (state=[], action) => {
  switch (action.type) {
    case 'ADD_BRANCH':
      return [...state, action.branch];
    default:
      return state;
  }
}

const treeList = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TREE':
      return [...state, action.tree];
    default:
      return state;
  }
}

const leafFilters = (state=[], action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return [...state, action.filter];
    case 'REMOVE_FILTER':
      console.log("Meant to remove: ");
      console.log(action.filter);
      return state;
    default:
      return state;
  }
}

const AppReducers = combineReducers({
  branchList,
  leafFilters,
  leafList,
  toggleLoading,
  treeList,
});

export default AppReducers;
