import Constants from "./constants";

interface phoneItem {
  image: string;
  price: number;
  item: string;
}

export const addItem = (item: [string, number, string]) => ({
  type: Constants.ADD_ITEM,
  payload: item,
});
export const deleteItem = () => ({
  type: Constants.DELETE_ITEM,
});
export const increaseQuantity = () => ({
  type: Constants.INCREASE_QUANTITY,
});
export const decreaseQuantity = () => ({
  type: Constants.DECREASE_QUANTITY,
});
export const test = (input: string) => ({
  type: Constants.TEST,
  payload: input,
});
