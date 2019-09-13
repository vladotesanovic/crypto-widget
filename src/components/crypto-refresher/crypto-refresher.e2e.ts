import { newE2EPage } from '@stencil/core/testing';

describe('crypto-refresher', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crypto-refresher></crypto-refresher>');

    const element = await page.find('crypto-refresher');
    expect(element).toHaveClass('hydrated');
  });
});
