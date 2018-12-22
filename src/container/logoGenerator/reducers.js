/*jshint esversion: 6 */


const logoGeneratorReducerInit = {

  step: 'companyName',
  logoData: {
    name: ''
  }
};

const logoGeneratorReducer = (state = logoGeneratorReducerInit, action) => {
  switch (action.type) {
    case 'CHANGE_STEP': {
      let newState = {...state}
      newState.step = action.data;
      return newState;
    }
    case 'CHANGE_LOGO': {
      let newState = {...state};
      newState.logoData = {...state.logoData};
      newState.logoData[action.data.field] = action.data.value;
      return newState;
    }


    default:
      return state;
  }
};

export default logoGeneratorReducer;
