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

    case "SET_ITEMS":
      return{
        ...state,
        items: action.payload,
      };

    case "SEARCH_ITEM":
      let foundItem = [];
      
      console.log('founI',foundItem);
      console.log('stateI', state.items);
      if (action.searchField === "") {
        // return initial state
        foundItem = [...state.items];
      } else {
        // console.log(action);
        foundItem = state.items.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(action.searchField.toLowerCase());
        });
      }

      return {
        ...state,
        items: foundItem,
      };
    case "ADD_TO_BASKET":
      // LOGIC TO ADD TO BASKET
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
      
    case "EMPTY_BASKET":
      return{
        ...state,
        basket: [],
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
