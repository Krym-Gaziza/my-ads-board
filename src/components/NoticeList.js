import React from 'react';
import { useNotices } from '../contexts/NoticesContext';
import Notice from './Notice';

const NoticeList = () => {
  const { notices, deleteNotice, updateNotice } = useNotices();

  return (
    <ul>
      {notices.map(notice => (
        <Notice key={notice.id} notice={notice} onDelete={deleteNotice} onUpdate={updateNotice} />
      ))}
    </ul>
  );
};

export default NoticeList;
