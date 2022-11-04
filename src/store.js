import { createStore } from 'vuex';
import { api } from './services/api';

export default createStore({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: '',
      name: '',
      email: '',
      street: '',
      zipcode: '',
      password: '',
      number: '',
      neighbourhood: '',
      city: '',
      state: '',
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
  },
  actions: {
    getUser(context, payload) {
      return api.get(`/usuario/${payload}`).then((response) => {
        context.commit('UPDATE_USER', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
    createUser(context, payload) {
      context.commit('UPDATE_USER', { id: payload.email });
      return api.post(`/usuario`, payload);
    },
    logoutUser(context) {
      context.commit('UPDATE_USER', {
        id: '',
        name: '',
        email: '',
        street: '',
        zipcode: '',
        password: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
      });
      context.commit('UPDATE_LOGIN', false);
    },
  },
});
