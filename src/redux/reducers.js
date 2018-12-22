import { combineReducers } from 'redux';

import logoGeneratorReducer from '../container/logoGenerator/reducers';
// import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
  logoGeneratorReducer: logoGeneratorReducer


});

export default reducers;
