import { newE2EPage } from '@stencil/core/testing';

describe('crypto-view', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crypto-view></crypto-view>');

    const element = await page.find('crypto-view');
    expect(element).toHaveClass('hydrated');
  });
});
