import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const productInCart = state.cart.find(item => item.id === product.id);
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({
          ...product,
          quantity: 1
        });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    LOAD_CART(state) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        state.cart = JSON.parse(savedCart);
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    INCREASE_QUANTITY(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        product.quantity++;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    DECREASE_QUANTITY(state, productId) {
      const product = state.cart.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    loadCart({ commit }) {
      commit('LOAD_CART');
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    increaseQuantity({ commit }, productId) {
      commit('INCREASE_QUANTITY', productId);
    },
    decreaseQuantity({ commit }, productId) {
      commit('DECREASE_QUANTITY', productId);
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartTotal(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  }
});
