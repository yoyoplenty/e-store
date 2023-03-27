export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD-TO-CART":
      return { ...state, [action.itemId]: state[action.itemId] + 1 };
    case "REMOVE-FROM-CART":
      return { ...state, [action.itemId]: state[action.itemId] - 1 };
    case "UPDATE-CARTITEM-SUM":
      return { ...state, [action.itemId]: action.newSum };
    default:
      return state;
  }
};
