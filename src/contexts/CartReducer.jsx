const storage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems.length > 0 ? cartItems : []))
}

export const CartReducerFunction = (state, action) => {
  let index = -1;

  if (action.payload) {
    index = state.cartItems.findIndex(i => i.id === action.payload.id)
  }

  let newItems = [...state.cartItems];

  switch (action.type) {

    case "ADD":
    case "INCQTY":
      // const index = state.cartItems.findIndex(
      //   x => x.id === action.payload.id
      // );

      if (index === -1) {
        // state.cartItems.push({ ...action.payload, quantity: 1 });
        newItems.push({ ...action.payload, quantity: 1 });

      } else {
        // state.cartItems[index].quantity++;
        newItems[index].quantity++;

      }
      break;

    case "REMOVE":
      if (index > -1) {
        // state.cartItems.splice(index, 1);
        newItems = state.cartItems.filter(item => item.id !== action.payload.id)
      }
      break;

    case "DECQTY":
      if (index > -1) {
        // state.cartItems[index].quantity--;
        if (newItems[index].quantity > 1) {
          newItems[index].quantity--;
        }
      }
      break;

    case "CLEAR":
      // state.cartItems = []
      newItems = []
      break;

    default:
  }

  state.cartItems = newItems;
  storage(newItems);
  return state;
};
