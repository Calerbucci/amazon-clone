export const initialState = {
  basket: [],
  user: null,
  searchField: "",
  items: [
    {
      id: "12345",
      title: "Midnight Sun",
      price: 559.53,
      rating: 5,
      image:
        "https://d188rgcu4zozwl.cloudfront.net/content/B087V5N4Q4/resources/790453366",
    },

    {
      id: "12346",
      title:
        "Apple MacBook Pro MD313LL/A 13.3-Inch Laptop Intel i5 2.4GHz 4GB Ram - 500GB HDD (Renewed)",
      price: 16408.78,
      rating: 3,
      image: "https://m.media-amazon.com/images/I/81vs5TXBrlL._AC_UY218_.jpg",
    },

    {
      id: "12347",
      title:
        "Portable Bluetooth Speaker,SANAG Bluetooth 5.0 Dual Pairing Loud Wireless Mini Speaker, 360 HD Surround Sound & Rich Stereo Bass,12H Playtime, IPX6 Waterproof for Travel, Outdoors, Home and Party",
      price: 880.76,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71RQ3SYE3JL._AC_UY218_.jpg",
    },

    {
      id: "12348",
      title: "Adidas Men's Nemeziz 19.3 Firm Ground Boots Soccer Shoe",
      price: 2726.09,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61Z6UicDVkL._AC_UL320_.jpg",
    },

    {
      id: "12349",
      title:
        "Powerbeats Pro Totally Wireless & High-Performance Bluetooth Earphones Black (Renewed)",
      price: 4632.65,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61RkjWOHljL._AC_UY218_.jpg",
    },

    {
      id: "12340",
      title: 'UHD 4K Curved Smart TV RU7300 65" - Specs & Price | Samsung US',
      price: 6000.56,
      rating: 5,
      image:
        "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6115/6115611_sd.jpg",
    },
  ],
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
        items: foundItem,
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
