// src/contexts/NoticesContext.js

import React, { createContext, useState, useCallback, useContext } from 'react';

const NoticesContext = createContext();

export const useNotices = () => {
  return useContext(NoticesContext);
};

export const NoticesProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);

  const addNotice = useCallback((notice) => {
    setNotices((currentNotices) => [...currentNotices, { ...notice, id: Date.now() }]);
  }, []);

  const deleteNotice = useCallback((id) => {
    setNotices((currentNotices) => currentNotices.filter(notice => notice.id !== id));
  }, []);

  const updateNotice = useCallback((id, text) => {
    setNotices((currentNotices) => currentNotices.map(notice => notice.id === id ? { ...notice, text } : notice));
  }, []);

  return (
    <NoticesContext.Provider value={{ notices, addNotice, deleteNotice, updateNotice }}>
      {children}
    </NoticesContext.Provider>
  );
};
