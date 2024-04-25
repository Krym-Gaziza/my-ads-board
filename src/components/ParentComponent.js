import React, { useState } from 'react';
import AddNoticeForm from './AddNoticeForm';

const ParentComponent = () => {
  const addNotice = (text) => {

    console.log('Adding notice:', text);
  };

  return (
    <div>
      <h1>Interactive Noticeboard</h1>
      <AddNoticeForm onSubmit={addNotice} />
      {}
    </div>
  );
};

export default ParentComponent;
