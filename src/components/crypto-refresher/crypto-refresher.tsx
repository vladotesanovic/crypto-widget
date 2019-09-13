import { Component, Host, Event, h, EventEmitter } from '@stencil/core';

@Component({
  tag: 'crypto-refresher',
  styleUrl: 'crypto-refresher.css',
})
export class CryptoRefresher {

  @Event() refreshCryptoData: EventEmitter;

  refresh() {
    this.refreshCryptoData.emit(true);
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.refresh()}>Refresh Crypto Data</button>
      </Host>
    );
  }

}
