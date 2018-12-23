/*jshint esversion: 6 */
const idalLogoData = [
  {
    name: 'Jobs',
    industry: '',
    icon: 'fa fa-address-book',
    width: 280,
    height: 280,
    iconSize: 90,
    nameSize: 60,
    color: '#42A354',
    bgColor: '#111111',
    nameColor: '#42A354',
    fontFamily: "Sketch3D",
    positionX: 7,
    positionY: 30,
    namePositionX: 43,
    namePositionY: 34,
    borderSize: 5,
    borderColor: '#111111',
    borderRadius: 0,
  },
  {
    name: 'Rent a car',
    industry: '',
    icon: 'fa fa-car',
    width: 280,
    height: 280,
    iconSize: 90,
    nameSize: 30,
    color: '#4A90E2',
    bgColor: '#E6FFFD',
    nameColor: '#4E49A4',
    fontFamily: "Bubblegum",
    positionX: 33,
    positionY: 25,
    namePositionX: 18,
    namePositionY: 63,
    borderSize: 15,
    borderColor: '#4A90E2',
    borderRadius: 200,
  },
  {
    name: 'BankUs',
    industry: '',
    icon: 'fa fa-university',
    width: 280,
    height: 280,
    iconSize: 90,
    nameSize: 38,
    color: '#2233C4',
    bgColor: '#F6EFFD',
    nameColor: '#2233C4',
    fontFamily: "GROBOLD",
    positionX: 5,
    positionY: 30,
    namePositionX: 43,
    namePositionY: 37,
    borderSize: 5,
    borderColor: '#F6EFFD',
    borderRadius: 0,
  },
  {
    name: 'MultCom',
    industry: '',
    icon: 'fa fa-cubes',
    width: 280,
    height: 280,
    iconSize: 140,
    nameSize: 25,
    color: '#A0F563',
    bgColor: '#454545',
    nameColor: '#EEEEEE',
    fontFamily: "HeroesLegendHollow",
    positionX: 23,
    positionY: 15,
    namePositionX: 13,
    namePositionY: 76,
    borderSize: 15,
    borderColor: '#409523',
    borderRadius: 40,
  },
  {
    name: 'Racing Speed',
    industry: '',
    icon: 'fa fa-flag-checkered',
    width: 280,
    height: 280,
    iconSize: 60,
    nameSize: 35,
    color: 'white',
    bgColor: '#454545',
    nameColor: 'orange',
    fontFamily: "Blazed",
    positionX: 15,
    positionY: 18,
    namePositionX: 23,
    namePositionY: 36,
    borderSize: 5,
    borderColor: 'darkRed',
    borderRadius: 10,
  },
  {
    name: 'Shocks waving',
    industry: '',
    icon: 'fa fa-gavel',
    width: 280,
    height: 280,
    iconSize: 160,
    nameSize: 35,
    color: '#909090',
    bgColor: '#232323',
    nameColor: 'red',
    fontFamily: "ObelixPro-Broken-cyr",
    positionX: 20,
    positionY: 18,
    namePositionX: 20,
    namePositionY: 36,
    borderSize: 0,
    borderColor: 'darkRed',
    borderRadius: 0,
  },
  {
    name: 'Wishes Basket',
    industry: '',
    icon: 'fa fa-shopping-basket',
    width: 280,
    height: 280,
    iconSize: 120,
    nameSize: 35,
    color: '#121212',
    bgColor: '#EEEEEE',
    nameColor: 'red',
    fontFamily: "GrinchedRegular",
    positionX: 25,
    positionY: 40,
    namePositionX: 18,
    namePositionY: 22,
    borderSize: 0,
    borderColor: 'darkRed',
    borderRadius: 60,
  },
  {
    name: 'Vancouver U18 Football Team',
    industry: '',
    icon: 'fa fa-futbol',
    width: 280,
    height: 280,
    iconSize: 120,
    nameSize: 25,
    color: '#121212',
    bgColor: '#96F656',
    nameColor: '#363606',
    fontFamily: "FunSized",
    positionX: 29,
    positionY: 15,
    namePositionX: 8,
    namePositionY: 65,
    borderSize: 0,
    borderColor: 'darkRed',
    borderRadius: 10,
  },
  {
    name: 'New Road',
    industry: '',
    icon: 'fa fa-road',
    width: 280,
    height: 280,
    iconSize: 120,
    nameSize: 30,
    color: '#454569',
    bgColor: '#FF90A0',
    nameColor: '#454569',
    fontFamily: "HotSweat",
    positionX: 27,
    positionY: 15,
    namePositionX: 12,
    namePositionY: 58,
    borderSize: 0,
    borderColor: 'red',
    borderRadius: 200,
  },
  {
    name: 'Hightech',
    industry: '',
    icon: 'fa fa-space-shuttle',
    width: 280,
    height: 280,
    iconSize: 30,
    nameSize: 48,
    color: '#909090',
    bgColor: '#121212',
    nameColor: 'red',
    fontFamily: "Adventure",
    positionX: 77,
    positionY: 46,
    namePositionX: 8,
    namePositionY: 40,
    borderSize: 0,
    borderColor: 'darkRed',
    borderRadius: 10,
  }
];

const idealColorData = [
  {
    data: ['#565656', '#787878', '#9A9A9A', '#CCCCCC', '#FFFFFF']
  },
  {
    data: ['#111191', '#4444C4', '#7777D7', '#AAAAEA', '#DDDDFF']
  },
  {
    data: ['#119191', '#44C4C4', '#77D7D7', '#AAEAEA', '#DDFFFF']
  },
  {
    data: ['#119111', '#44C444', '#77D777', '#AAEAAA', '#DDFFDD']
  },
  {
    data: ['#911111', '#C44444', '#D77777', '#EAAAAA', '#FFDDDD']
  },
  {
    data: ['#917111', '#C4A444', '#D7C777', '#EADAAA', '#FFF4DD']
  },
]

const logoGeneratorReducerInit = {
  step: 'companyName',
  logoData: {
    name: '',
    industry: '',
    icon: 'fa fa-home',
    width: 200,
    height: 200,
    iconSize: 90,
    nameSize: 20,
    color: '#EEA814',
    bgColor: '#E6FFFD',
    nameColor: '#4A90E2',
    positionX: 20,
    positionY: 15,
    namePositionX: 41,
    namePositionY: 68,
    borderSize: 15,
    borderColor: '#4A90E2',
    borderRadius: 200,
  },
  idealLogo: idalLogoData,
  idealColor: idealColorData,
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
    case 'PICK_IDEAL_LOGO': {
      let newState = {...state};
      newState.idealLogo = [].concat(state.idealLogo);
      newState.idealLogo[action.data.index] = {...state.idealLogo[action.data.index]};
      newState.idealLogo[action.data.index].selected = !state.idealLogo[action.data.index].selected;
      return newState;
    }
    case 'PICK_IDEAL_COLOR': {
      let newState = {...state};
      newState.idealColor = [].concat(state.idealColor);
      newState.idealColor[action.data.index] = {...state.idealColor[action.data.index]};
      newState.idealColor[action.data.index].selected = !state.idealColor[action.data.index].selected;
      return newState;
    }

    default:
      return state;
  }
};

export default logoGeneratorReducer;
