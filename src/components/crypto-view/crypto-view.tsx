import { Component, Host, h, Prop, State, Method } from '@stencil/core';
import { getCryptoData } from '../../utils/utils';
import { CryptoInterface } from './crypto.interface';

@Component({
  tag: 'crypto-view',
  styleUrl: 'crypto-view.css',
  shadow: true
})
export class CryptoView {

  /**
   * Valid API key obtained from cryptocompare.com
   */
  @Prop() apiKey: string;

  @State() cryptoData: CryptoInterface;

  cryptoCurrencies = ['BTC', 'ETH', 'XRP'];

  componentDidLoad() {
    this.fetchData();
  }

  fetchData() {
    getCryptoData(this.apiKey).then((data) => {
      this.cryptoData = data;
    });
  }

  @Method()
  async refreshCryptoData() {
    this.fetchData();
  }

  render() {
    return (
      <Host>
        <b>Crypto data on date: {new Date().toLocaleDateString()}</b>
        <crypto-table cryptoData={this.cryptoData} cryptoCurrencies={this.cryptoCurrencies} />
        <crypto-refresher onRefreshCryptoData={() => this.fetchData()} />
        <div>hello</div>
        <slot></slot>
      </Host>
    );
  }

}
