const defaultState = {
  text: 'initial',
  
  data:null
};

export default function(state=defaultState, action = {}) {
  switch(action.type) {
    case 'UPDATE':
      return {
        ...state,
        text: action.text
      };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, error: null };
      case 'FETCH_DATA_FAILURE':
        return { ...state, data: null, error: action.payload };
    default:
      return state;
  }
}