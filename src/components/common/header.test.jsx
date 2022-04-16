import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './header';

test('Renders Correctly', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <Header />
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
