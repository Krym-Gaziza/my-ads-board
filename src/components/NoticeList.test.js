import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { NoticesContext } from '../contexts/NoticesContext';
import NoticeList from './NoticeList';

describe('NoticeList update functionality', () => {
  const mockAds = [{ id: 1, text: 'Ad 1' }];
  const mockUpdateAd = jest.fn();

  it('allows an ad to be updated', () => {
    render(
      <NoticesContext.Provider value={{ ads: mockAds, deleteAd: jest.fn(), updateAd: mockUpdateAd }}>
        <NoticeList />
      </NoticesContext.Provider>
    );

    fireEvent.click(screen.getByText('Редактировать'));
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Updated Ad 1' } });
    fireEvent.click(screen.getByText('Обновить'));

    expect(mockUpdateAd).toHaveBeenCalledWith({ id: 1, text: 'Updated Ad 1' });
  });
});