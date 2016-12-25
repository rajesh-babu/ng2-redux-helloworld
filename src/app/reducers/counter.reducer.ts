import { INCREMENT } from '../actions/counter.actions'
const INITIAL_STATE: number = 0;

export function count(state: number = INITIAL_STATE, action:any) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case "DECREMENT_COUNTER":
      return state - 1;
    case "RANDOMIZE_COUNTER":
      return action.payload;
    default:
      return state;
  }
}
