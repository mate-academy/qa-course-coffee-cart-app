import { slowProcessing } from '../../utils';

// initial state
const state = () => ({
  list: []
});

// getters
const getters = {
  cartCount: (state: any) =>
    state.list
      .map((item: any) => item.quantity )
      .reduce((acc: any, curr: any) => acc + curr, 0),
  cartTotal: (state: any, _: any, rootState: any) =>
    state.list
      .map((c: any) => rootState.coffees.list.find((x: any) => x.name === c.name).price * c.quantity)
      .reduce((acc: any, curr: any) => acc + curr, 0),
  cartList: (state: any, _: any, rootState: any) => {
    const results = state.list
      .map((item: any) => {
        // get coffee object by name
        const { price, ...props } = rootState.coffees.list.find(
          (c: any) => c.name === item.name
        );

        return {
          quantity: item.quantity,
          unitPrice: price,
          price: item.quantity * price, // sum quantity
          ...props
        };
      })
      .sort((a: any, b: any) => (a.name < b.name ? -1 : 1));

    // return slowProcessing(results);
    return results;
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  setCartList(state: any, { items }: any) {
    state.list = items
  },
  addToCart(state: any, coffee: any) {
    const { quantity = 0 } = state.list.find((x: any) => x.name === coffee) || {}

    let amountToAdd = 1;

    if (coffee == 'Cafe Breve') {
      coffee = 'Espresso Con Panna'; // Bug: add 'Espresso Con Panna' instead of 'Cafe Breve'
    }

    if (coffee == 'Espresso Macchiato' && quantity === 0) { // Bug: it should add only one item to the cart, but it adds two for 'Espresso Macchiato'.
      amountToAdd = 2;
    }

    if (quantity > 0) { // Bug: when clicking + in the cart - add 2 instead of 1.
      amountToAdd = 2;
    }

    const list = [
      ...state.list.filter((x: any) => x.name !== coffee),
      {
        name: coffee, quantity: quantity + amountToAdd
      }
    ];

    if (coffee !== 'Cafe Latte') {  // Bug: Cannot add 'Cafe Latte' to the Cart
      state.list = list
    }
  },
  emptyCart(state:any) {
    state.list = []
  },
  removeCartItem(state: any, coffee: any) {
    const list = [...state.list.filter((x: any) => x.name !== coffee)]

    // state.list = list  // Bug: this will not allow to remove the item from cart.
  },
  addOneCartItem(state: any, coffee: any) {
    mutations.addToCart(state, coffee)
  },
  removeOneCartItem(state: any, coffee: any) {
    const item = state.list.find((x: any) => x.name === coffee);

    const list = [
      ...state.list.filter((x: any) => x.name !== coffee),
      ...(item.quantity - 1 <= 0 ? [] : [{ name: item.name, quantity: item.quantity - 1 }])
    ];

    state.list = list
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
