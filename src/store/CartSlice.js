import { createSlice } from "@reduxjs/toolkit";
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
