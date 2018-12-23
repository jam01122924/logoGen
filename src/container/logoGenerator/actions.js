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

export const pickIdealLogo = (index, selected) => ({
  type: 'PICK_IDEAL_LOGO',
  data: { index, selected }
})

export const pickIdealColor = (index, selected) => ({
  type: 'PICK_IDEAL_COLOR',
  data: { index, selected }
})
