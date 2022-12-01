import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders learn react link', () => {
    render(<Form />);
    const btn = screen.getByRole('button', { name: /kup/i });
    expect(btn).toBeInTheDocument();
});

// test('renders learn react link', () => {
//     render(<Form />);
//     const btn = screen.getByRole('button', { name: /kup/i });
//     expect(btn).toBeInTheDocument();
// });


