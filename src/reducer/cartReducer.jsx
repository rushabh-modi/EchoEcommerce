const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    //   console.log(
    //     "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //     product
    //   );

    //tackele the same existing products that creates a duplicate value in cart page

    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curItem) => {
        if (curItem.id === id + color) {
          let newAmount = curItem.amount + amount;
          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }
          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem;
        }
      });

      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //   to set increment and decre
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decAmount = curItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curItem,
          amount: decAmount,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updatedProduct };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let increAmount = curItem.amount + 1;

        if (increAmount >= curItem.max) {
          increAmount = curItem.max;
        }
        return {
          ...curItem,
          amount: increAmount,
        };
      } else {
        return curItem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  //to empty cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};

export default cartReducer;
