import axios from 'axios';

export const economiaClient = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/',
  timeout: 1000,
});
