import { render, screen } from '@testing-library/react';
import NotFound from './not-found';

test('Page Not Found', async () => {
  const { container } = render(<NotFound />);
  expect(container).toMatchSnapshot();
  expect(await screen.findByText(/OOOPS!!! PAGE NOT FOUND/i)).toBeInTheDocument();
});
