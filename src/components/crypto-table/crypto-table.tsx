import { Component, Host, h, Prop, Watch, State } from '@stencil/core';

import { CryptoInterface } from '../crypto-view/crypto.interface';

@Component({
  tag: 'crypto-table',
  styleUrl: 'crypto-table.css',
  shadow: false,
  scoped: true
})
export class CryptoTable {

  @Prop() cryptoData: CryptoInterface;
  @Prop() cryptoCurrencies: string[];

  @State() sum: { USD: number, EUR: number };

  @Watch('cryptoData')
  watching(cryptoData: CryptoInterface) {
    this.sum = {
      USD: Math.round(cryptoData.BTC.USD + cryptoData.ETH.USD + cryptoData.XRP.USD),
      EUR: Math.round(cryptoData.BTC.EUR + cryptoData.ETH.EUR + cryptoData.XRP.EUR),
    }
  }

  render() {
    return (
      <Host>
        <table class={'crypto'}>
          <tr>
            <td></td>
            <td>USD</td>
            <td>EUR</td>
          </tr>
          {this.cryptoCurrencies.map((item) => {
            return this.cryptoData && item in this.cryptoData ? <tr>
              <td>{item}</td>
              <td>{this.cryptoData[item].USD}</td>
              <td>{this.cryptoData[item].EUR}</td>
            </tr> : null
          })}
          {this.sum ?
          <tr>
            <td></td>
            <td>{this.sum.USD}</td>
            <td>{this.sum.EUR}</td>
          </tr> : null }
        </table>
      </Host>
    );
  }

}
