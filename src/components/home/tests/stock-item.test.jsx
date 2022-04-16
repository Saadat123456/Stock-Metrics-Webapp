import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import mockData from '../../../redux/StockData/mock_data';
import StockItem from '../stock-item';

it('renders correctly', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <StockItem stock={mockData[0]} />
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
  const stockItemElement = screen.getByText(/Bitcoin/i);
  expect(stockItemElement).toBeInTheDocument();
});
