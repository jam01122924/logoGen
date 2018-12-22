import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

const errorHandler = (store)=>(next)=>(action)=>{
  try{
    next(action);
  } catch(e) {
    console.log(e);
  }
};
const middleware = applyMiddleware(logger, errorHandler);

export default middleware;
