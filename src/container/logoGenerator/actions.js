/*jshint esversion: 6 */

export const changeStep = data => {
  return {
    type: 'CHANGE_STEP',
    data
  };
};

export const changeLogo = (field, value) => {
  return {
    type: 'CHANGE_LOGO',
    data: {
      field,
      value
    }
  }
}
