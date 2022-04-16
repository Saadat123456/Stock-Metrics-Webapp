import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from './back-button';

test('Renders Correctly', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <BackButton />
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
