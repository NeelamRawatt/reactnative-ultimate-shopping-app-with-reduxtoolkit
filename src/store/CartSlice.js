import { createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (cartItem) {
        if (amount == -1 && cartItem.quantity == 0) {
        } else {
          cartItem.quantity += amount;
        }
      }
      //The .filter() function is used on state.items.
      //It creates a new array that includes only those items for which the provided callback function returns true.
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item !== cartItem);
      }
    },
  },
});
export const selectedNumberOfItems = (state) => state.cart.items.length;
//having an array of item we need one value from it , using reduce
export const selectedSubTotal = (state) =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0
  );
const cartSelector = (state) => state.cart;

export const selectDeliveryPrice = createSelector(
  cartSelector,
  //dependent on this selector and based on this we got subtotal value .
  //deliveryfee will be multiple of subtotal
  selectedSubTotal,
  (cart, subtotal) => (subtotal > cart.freeDeliveryFrom ? 0 : cart.deliveryFee)
);

export const selectTotal = createSelector(
  selectedSubTotal,
  selectDeliveryPrice,
  (subtotal, delivery) => subtotal + delivery
);
