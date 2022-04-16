import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
// We're using our own custom render function and not RTL's render.
// Our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from './test-utils';
import App from '../App';
import { getDetailsApiUrl } from '../redux/Details/details';
import getCoinMarketApiUrl from '../strings';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const handlers = [
  rest.get(getCoinMarketApiUrl(), (req, res, ctx) => res(ctx.json({
    data: {
      cryptoCurrencyList: [
        {
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
        },
      ],
    },
  }), ctx.delay(150))),
  rest.get(getDetailsApiUrl(), (req, res, ctx) => res(ctx.json({
    data: {
      points: {
        1649987640: {
          v: [
            39977.77958128699500000000,
            24547993275.61015320,
            760052548176.9806880656250000000000000000,
            1,
            19011875.000000000000,
          ],
        },
        1649987940: {
          v: [
            39985.14570043699500000000,
            24490246919.40533066,
            760192591913.4955943156250000000000000000,
            1,
            19011875.000000000000,
          ],
        },
        1649988240: {
          v: [
            39957.10514902175000000000,
            24429893766.32482147,
            759659488455.0578832812500000000000000000,
            1,
            19011875.000000000000,
          ],
        },
        1649988540: {
          v: [
            39955.37895255197000000000,
            24389937616.06008911,
            759626670223.5489846437500000000000000000,
            1,
            19011875.000000000000,
          ],
        },
      },
    },
    status: {
      timestamp: '2022-04-16T03:33:35.629Z', error_code: '0', error_message: 'SUCCESS', elapsed: '6', credit_count: 0,
    },
  }), ctx.delay(1000))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('App UI Test', async () => {
  const history = createMemoryHistory();
  const { queryByTestId, getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>,
  );
  const user = userEvent.setup();
  expect(await screen.findByText(/Bitcoin/i)).toBeInTheDocument();
  expect(getByTestId('item-1')).toBeTruthy();
  expect(queryByTestId('item-1027')).toBeFalsy();
  fireEvent.click(getByTestId('item-1'));
  expect(getByTestId('loading')).toBeInTheDocument();
  expect(await screen.findByText(/Market Cap/i)).toBeInTheDocument();
  expect(await screen.findByText(/41152.271/i)).toBeInTheDocument();
  expect(await screen.findByText(/39977.779581286995/i)).toBeInTheDocument();
  await user.click(getByTestId('back-btn'));
  expect(await screen.findByText(/Bitcoin/i)).toBeInTheDocument();
  expect(getByTestId('item-1')).toBeTruthy();
});
