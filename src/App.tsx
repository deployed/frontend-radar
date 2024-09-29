import React from 'react';

import {Routes, Route, Navigate} from 'react-router-dom';
import {Backend} from './Backend';
import {Frontend} from './Frontend';
import {TechProvider} from './context/Context';

function App() {
  return (
    <TechProvider>
      <Routes>
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="*" element={<Navigate to="/frontend" />} />
      </Routes>
    </TechProvider>
  );
}

export default App;
