import { EnthusiasmAction } from '../actions';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export namespace Store {
  export type Enthusiasm = { enthusiasmLevel: number };
}
const initialState: Store.Enthusiasm = {
  enthusiasmLevel: 1,
};

function enthusiasm(state: Store.Enthusiasm = initialState, action: EnthusiasmAction) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return { ...state};  
  }
}

const rootReducer = combineReducers({
  enthusiasm: enthusiasm,
  routing: routerReducer
});

export default rootReducer;