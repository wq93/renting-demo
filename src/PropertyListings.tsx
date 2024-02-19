import React, { useEffect } from 'react';
import { usePropertyContext } from '../utils/PropertyContext';

const PropertyListings: React.FC = () => {
  const { properties, setProperties } = usePropertyContext();

  useEffect(() => {
    // 模拟获取房产列表数据的过程
    const fetchData = async () => {
      const response = await fetch('./utils/propertyData.json');
      const data = await response.json();
      setProperties(data);
    };

    fetchData();
  }, [setProperties]);

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map(property => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyListings;
