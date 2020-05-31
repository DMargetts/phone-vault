import Constants from "./constants";

interface state {
  quantity: number;
  itemArray: any;
  test: string;
}
const initialState: state = {
  quantity: 0,
  itemArray: [],
  test: "",
};

const shopReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case Constants.INCREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case Constants.DECREASE_QUANTITY:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    case Constants.ADD_ITEM:
      return {
        ...state,
        itemArray: state.itemArray.concat([action.payload]),
      };
    case Constants.DELETE_ITEM:
      return {
        ...state,
        itemArray: state.itemArray.splice(action.payload),
      };
    case Constants.TEST:
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
