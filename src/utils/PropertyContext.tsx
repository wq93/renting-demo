import React, { createContext, useContext, useState, ReactNode } from 'react';

import {
  PropertyListing,
  PropertyDetail,
  mockPropertyListings,
  mockPropertyDetails
} from '../utils/propertyData';

/*
 * PropertyContextType:
 * - properties: 房屋列表
 * - selectedProperty: 选中房屋详情
 * - selectProperty: 设置选中房屋详情方法
 */
interface PropertyContextType {
  properties: PropertyListing[];
  selectedProperty: PropertyDetail | null;
  selectProperty: (propertyId: number) => void;
}

const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  selectedProperty: null,
  selectProperty: () => {},
});

export const PropertyProvider: React.FC<{children: ReactNode }> = ({ children }) => {
  const [properties] = useState(mockPropertyListings);
  const [selectedProperty, setSelectedProperty] = useState<PropertyDetail | null>(null);

 // 设置选中房产数据
  const selectProperty = (propertyId: number) => {
    const selectedProperty = mockPropertyDetails.find(property => property.id === propertyId);
    setSelectedProperty(selectedProperty as PropertyDetail);
  };

  return (
    <PropertyContext.Provider value={{ properties, selectedProperty, selectProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyContext };
