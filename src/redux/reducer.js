// Пример редьюсера для Redux
const adReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_AD':
        return [...state, action.payload];
      case 'REMOVE_AD':
        return state.filter(ad => ad.id !== action.payload);
      default:
        return state;
    }
  };
  
  export default adReducer;
  