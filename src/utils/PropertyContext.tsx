// PropertyContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

import { PropertyDetail } from '../utils/propertyData';


interface PropertyContextType {
  properties: PropertyDetail[];
  setProperties: React.Dispatch<React.SetStateAction<PropertyDetail[]>>;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const usePropertyContext = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('usePropertyContext must be used within a PropertyProvider');
  }
  return context;
};

export const PropertyProvider: React.FC<{children: ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<PropertyDetail[]>([]);

  return (
    <PropertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyContext.Provider>
  );
};
