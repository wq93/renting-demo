// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PropertyProvider } from '../utils/PropertyContext';
import PropertyListings from './PropertyListings';
import PropertyDetails from './PropertyDetails';

const App: React.FC = () => {
  return (
    <PropertyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PropertyListings />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </Router>
    </PropertyProvider>
  );
};

export default App;
