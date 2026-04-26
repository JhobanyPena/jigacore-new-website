import { combineReducers } from "redux";

// E-commerce reducers eliminados (cart, wishlist, shop, order)
// Se mantiene Redux para funcionalidad futura si se necesita
const rootReducer = combineReducers({
  // placeholder para evitar error de combineReducers vacío
  _placeholder: (state = {}) => state,
});

export default rootReducer;
