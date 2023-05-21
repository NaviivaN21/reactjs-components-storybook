import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'></Route>
        <Route path='/contact'></Route>
        <Route path='/about'></Route>
      </Routes>
    </Router>
  )
};

export default App;