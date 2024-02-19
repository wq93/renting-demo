import React, { useEffect } from 'react';
import { usePropertyContext } from './utils/PropertyContext';
import {mockPropertyDetails} from './utils/propertyData';
import ListingsItem from './components/ListingsItem';

const PropertyListings: React.FC = () => {
  const { properties, setProperties } = usePropertyContext();

  useEffect(() => {
    // 模拟获取房产列表数据的过程
    const fetchData = () => {
      setProperties(mockPropertyDetails);
    };

    fetchData();
  }, [setProperties]);

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map(property => (
          <ListingsItem
            key={property.id}
            {...property}
          />
        ))}
      </ul>
    </div>
  );
};

export default PropertyListings;
