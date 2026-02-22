import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../ContactForm';

describe('ContactForm', () => {
  test('renders name, email, phone, subject, message fields', () => {
    render(<ContactForm />);
    expect(screen.getByPlaceholderText('Unesite vaše ime')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('vas@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+387 6X XXX XXX')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Kako vam možemo pomoći?')).toBeInTheDocument();
  });

  test('renders subject dropdown with 4 options', () => {
    render(<ContactForm />);
    expect(screen.getByText('Upit za ponudu')).toBeInTheDocument();
    expect(screen.getByText('Tehnička podrška')).toBeInTheDocument();
    expect(screen.getByText('Partnerstvo')).toBeInTheDocument();
    expect(screen.getByText('Ostalo')).toBeInTheDocument();
  });

  test('renders privacy checkbox', () => {
    render(<ContactForm />);
    expect(screen.getByText(/Slažem se da iT Systems/)).toBeInTheDocument();
  });

  test('renders "Pošaljite poruku" submit button', () => {
    render(<ContactForm />);
    expect(screen.getByText('Pošaljite poruku')).toBeInTheDocument();
  });

  test('shows validation error when submitting without name', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const emailInput = screen.getByPlaceholderText('vas@email.com');
    await user.type(emailInput, 'test@test.com');

    const submitBtn = screen.getByText('Pošaljite poruku');
    await user.click(submitBtn);

    const alerts = screen.getAllByRole('alert');
    expect(alerts.length).toBeGreaterThanOrEqual(1);
  });

  test('shows validation error when submitting without email', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    const nameInput = screen.getByPlaceholderText('Unesite vaše ime');
    await user.type(nameInput, 'Test User');

    const submitBtn = screen.getByText('Pošaljite poruku');
    await user.click(submitBtn);

    const alerts = screen.getAllByRole('alert');
    expect(alerts.length).toBeGreaterThanOrEqual(1);
  });

  test('shows success message after valid submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Unesite vaše ime'), 'Test User');
    await user.type(screen.getByPlaceholderText('vas@email.com'), 'test@test.com');

    await user.click(screen.getByText('Pošaljite poruku'));

    expect(screen.getByTestId('success-message')).toBeInTheDocument();
  });

  test('success message contains "Hvala" and "24 sata"', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByPlaceholderText('Unesite vaše ime'), 'Test User');
    await user.type(screen.getByPlaceholderText('vas@email.com'), 'test@test.com');

    await user.click(screen.getByText('Pošaljite poruku'));

    expect(screen.getByText(/Hvala/)).toBeInTheDocument();
    expect(screen.getByText(/24 sata/)).toBeInTheDocument();
  });
});
