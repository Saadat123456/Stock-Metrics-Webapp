import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './search';
import store from '../../redux/configStore';

test('Renders Correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Search />
      </Router>
    </Provider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
