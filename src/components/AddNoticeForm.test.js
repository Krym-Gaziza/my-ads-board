import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NoticesProvider } from '../contexts/NoticesContext'; 
import AddNoticeForm from './AddNoticeForm';

describe('AddNoticeForm', () => {
  test('allows the user to add a notice', () => {
    render(<AddNoticeForm />, { wrapper: NoticesProvider }); 

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test notice' } });
    fireEvent.click(screen.getByText('Add Notice')); 
    expect(screen.getByRole('textbox').value).toBe(''); 
  });
});
