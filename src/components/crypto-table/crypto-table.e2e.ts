import { newE2EPage } from '@stencil/core/testing';

describe('crypto-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<crypto-table></crypto-table>');

    const element = await page.find('crypto-table');
    expect(element).toHaveClass('hydrated');
  });
});
