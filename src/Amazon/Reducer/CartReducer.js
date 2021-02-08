export const initialState = {
  productDetails: [],
  productCount: 0,
};
const CartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      let ct = 0;
      ct = ct + action.count;
      console.log(ct);
      return {
        ...state,
        productDetails: [action.selectedProduct],
        productCount: action.count,
        id: action.id,
      };
    default:
      return state;
  }
};
export default CartReducer;
