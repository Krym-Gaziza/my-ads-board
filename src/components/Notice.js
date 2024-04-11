// src/Notice.js

import React, { useState } from 'react';

const Notice = ({ notice, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(notice.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(notice.id, editText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          {notice.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(notice.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default Notice;
