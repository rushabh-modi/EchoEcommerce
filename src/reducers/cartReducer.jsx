const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    //tackle the same existing products that creates a duplicate value in cart page

    if (!state.cart) {
      state.cart = [];
    }

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

  // to set increment and decrement
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

  //Mobile-fix -> reduce(state.cart) can't be null(0) => conditioned that it is greater than 0
  if (action.type === "CART_ITEM_PRICE_TOTAL") {
    let total_item = 0;
    let total_price = 0;

    if (state.cart && state.cart.length > 0) {
      ({ total_item, total_price } = state.cart.reduce(
        (accum, curItem) => {
          let { price, amount } = curItem;
          accum.total_item += amount;
          accum.total_price += price * amount;
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      ));
    }
    return {
      ...state,
      total_item,
      total_price,
    };
  }

  return state;
};

export default cartReducer;
