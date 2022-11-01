import axios from 'axios';

export function zipCodeApi(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
