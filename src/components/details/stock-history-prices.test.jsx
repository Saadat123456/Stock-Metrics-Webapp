import { render } from '@testing-library/react';
import StockHistoryPrices from './stock-history-prices';

test('Renders Correctly', () => {
  const data = [
    [
      '1650043440',
      40493.35613391777,
    ],
    [
      '1650043740',
      40502.17406780077,
    ],
    [
      '1650044040',
      40524.388687130406,
    ],
    [
      '1650044340',
      40457.363542248575,
    ],
    [
      '1650044640',
      40425.773716666015,
    ],
    [
      '1650044940',
      40422.37122513517,
    ],
  ];

  const { container } = render(
    <StockHistoryPrices description={data} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
