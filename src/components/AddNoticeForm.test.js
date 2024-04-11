import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AdProvider } from '../contexts/NoticesContext';
import AddNoticeForm from './AddNoticeForm';

describe('AddAd', () => {
  test('allows the user to add an ad', () => {
    render(<AddNoticeForm />, { wrapper: AdProvider });

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test ad' } });
    fireEvent.click(screen.getByText('Добавить объявление'));

    expect(screen.getByRole('textbox').value).toBe('');
  });
});