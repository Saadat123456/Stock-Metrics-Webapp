import { render } from '@testing-library/react';
import LoadingSpinner from './loading-spinner';

test('Renders Correctly', () => {
  const { container } = render(
    <LoadingSpinner />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
