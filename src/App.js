import React, { Suspense } from 'react';
import { NoticesProvider } from './contexts/NoticesContext';
import AddNoticeForm from './components/AddNoticeForm';
import NoticeList from './components/NoticeList';
import './App.css'; 

const App = () => {
  return (
    <NoticesProvider>
      <div className="App">
        <h1>Interactive Noticeboard</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <AddNoticeForm />
          <NoticeList />
        </Suspense>
      </div>
    </NoticesProvider>
  );
};

export default App;
