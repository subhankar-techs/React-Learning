import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Details';
import Profile from './Profile';
import Edit from './Edit';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
};

export default App;