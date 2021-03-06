import { render } from '@testing-library/react';
import StockDescription from './stock-description';

test('Renders Correctly', () => {
  const mockStock = {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    cmcRank: 1,
    marketPairCount: 9321,
    circulatingSupply: 19010687,
    selfReportedCirculatingSupply: 0,
    totalSupply: 19010687,
    maxSupply: 21000000,
    ath: 68789.62593892214,
    atl: 65.5260009765625,
    high24h: 41314.3064712444,
    low24h: 39389.66448515963,
    isActive: 1,
    lastUpdated: '2022-04-13T16:31:00.000Z',
    dateAdded: '2013-04-28T00:00:00.000Z',
    quotes: [
      {
        name: 'BTC',
        price: 1,
        volume24h: 671983.87288077,
        volume7d: 5604749.15200911,
        volume30d: 22578384.36010631,
        marketCap: 19008857.47991877,
        selfReportedMarketCap: 0,
        percentChange1h: 0,
        percentChange24h: 0,
        percentChange7d: 0,
        lastUpdated: '2022-04-13T16:33:00.000Z',
        percentChange30d: 0,
        percentChange60d: 0,
        percentChange90d: 0,
        fullyDilluttedMarketCap: 864197690966.27,
        marketCapByTotalSupply: 19008857.47991877,
        dominance: 41.0058,
        turnover: 0.03535109,
        ytdPriceChangePercentage: -13.703,
      },
      {
        name: 'ETH',
        price: 13.28956385,
        volume24h: 8931232.09572217,
        volume7d: 74491840.55608584,
        volume30d: 300085759.7996437,
        marketCap: 252643738.75499496,
        selfReportedMarketCap: 0,
        percentChange1h: -0.160598,
        percentChange24h: 0.603222,
        percentChange7d: -2.474567,
        lastUpdated: '2022-04-13T16:32:00.000Z',
        percentChange30d: 5.50049019,
        percentChange60d: -2.95313932,
        percentChange90d: -5.05520967,
        fullyDilluttedMarketCap: 864197690966.27,
        marketCapByTotalSupply: 252643738.75499496,
        dominance: 41.0058,
        turnover: 0.03535109,
        ytdPriceChangePercentage: -13.703,
      },
      {
        name: 'USD',
        price: 41152.27099839362,
        volume24h: 27656323988.401524,
        volume7d: 230670354866.06894,
        volume30d: 929241218722.7467,
        marketCap: 782332943289.6387,
        selfReportedMarketCap: 0,
        percentChange1h: -0.27803815,
        percentChange24h: 2.64330378,
        percentChange7d: -6.23971299,
        lastUpdated: '2022-04-13T16:31:00.000Z',
        percentChange30d: 5.50049019,
        percentChange60d: -2.95313932,
        percentChange90d: -5.05520967,
        fullyDilluttedMarketCap: 864197690966.27,
        marketCapByTotalSupply: 782332943289.6387,
        dominance: 41.0058,
        turnover: 0.03535109,
        ytdPriceChangePercentage: -13.703,
      },
    ],
    isAudited: false,
  };
  const { container } = render(
    <StockDescription stock={mockStock} />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
