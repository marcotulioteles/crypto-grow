import axios from 'axios';

const bitcoinApi = axios.create({
  baseURL: 'https://www.mercadobitcoin.net/api/'
});

const dolarApi = axios.create({
  baseURL: 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/'
});

export {
  bitcoinApi,
  dolarApi
}