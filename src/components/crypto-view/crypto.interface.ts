export interface CryptoInterface {
  BTC: IPrices;
  ETH: IPrices;
  XRP: IPrices;
}

interface IPrices {
  USD: number;
  EUR: number;
}
