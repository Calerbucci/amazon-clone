export const initialState = {
  basket: [],
  user: null,
  searchField: "",
  items: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SEARCH_ITEM":
      let foundItem = [...state.items];
      if (action.searchField === "") {
        // return nothing
      } else {
        // console.log(action);

        foundItem = state.items.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(action.searchField.toLowerCase());
        });
        console.log(foundItem);
        console.log(state.items);
      }

      return {
        ...state,
        basket: foundItem,
      };
    case "ADD_TO_BASKET":
      // LOGIC TO ADD TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE_FROM_BASKET":
      //LOGIC TO REMOVE FROM BASKET
      let newBasket = [...state.basket];

      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //there's a product, remove it
        newBasket.splice(index, 1);
      } else {
        // console warning, there no items in the basket
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
