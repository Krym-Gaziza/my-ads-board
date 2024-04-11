// В родительском компоненте, который рендерит AddNoticeForm
import React, { useState } from 'react';
import AddNoticeForm from './AddNoticeForm';

const ParentComponent = () => {
  const addNotice = (text) => {
    // Логика добавления объявления
    console.log('Adding notice:', text);
  };

  return (
    <div>
      <h1>Interactive Noticeboard</h1>
      <AddNoticeForm onSubmit={addNotice} />
      {/* Рендер списка объявлений */}
    </div>
  );
};

export default ParentComponent;
