import {combineReducers} from 'redux';

const appReducer = combineReducers({});

export const LogOut = () => ({type: 'RESSET_STORE'});

const rootReducer = (state, action) => {
  if (action.type === 'RESSET_STORE') {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
