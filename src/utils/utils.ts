import { CryptoInterface } from '../components/crypto-view/crypto.interface';

export function getCryptoData(apiKey: string): Promise<CryptoInterface> {
  return fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR&api_key=${apiKey}`)
    .then(response => response.json());
}
