import React, { useState } from 'react';
import { useNotices } from '../contexts/NoticesContext';

const AddNoticeForm = () => {
  const [text, setText] = useState('');
  const { addNotice } = useNotices();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addNotice({ text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter notice text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Notice</button>
    </form>
  );
};

export default AddNoticeForm;
