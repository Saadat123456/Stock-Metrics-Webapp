import { render } from '@testing-library/react';
import NextButton from './next-btn';

test('Renders Correctly', () => {
  const { container } = render(
    <NextButton />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
