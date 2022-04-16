import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
// Import your own reducer
import myStore from '../redux/configStore';

function render(
  ui,
  {
    preloadedState,
    store = myStore,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
