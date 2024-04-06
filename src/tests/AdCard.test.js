import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdCard from '../components/AdCard';

describe('AdCard Component', () => {
  it('отображает информацию об объявлении', () => {
    const ad = { id: 1, title: 'Test Ad', description: 'Test Description' };
    render(<AdCard ad={ad} onDelete={() => {}} />);

    expect(screen.getByText('Test Ad')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('вызывает функцию удаления при клике', () => {
    const onDeleteMock = jest.fn();
    const ad = { id: 1, title: 'Test Ad', description: 'Test Description' };
    render(<AdCard ad={ad} onDelete={onDeleteMock} />);

    fireEvent.click(screen.getByText('Удалить'));
    expect(onDeleteMock).toHaveBeenCalledWith(1);
  });
});
