import { createStore } from 'vuex';
import { api } from './services/api';

export default createStore({
  state: {
    login: false,
    usuario: {
      id: '',
      nome: '',
      email: '',
      senha: '',
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    getUser(context, payload) {
      api.get(`/usuario/${payload}`).then((response) => {
        context.commit('UPDATE_USER', response.data);
        context.commit('UPDATE_LOGIN', true);
      });
    },
  },
});
