import { FC, useContext } from 'react';
import { PropertyContext } from './utils/PropertyContext';

import ListingsItem from './components/ListingsItem';

const PropertyListings: FC = () => {
  const { properties, selectProperty } = useContext(PropertyContext);

  const handlePropertySelect = (propertyId: number) => {
    // 点击设置PropertyDetails
    if (propertyId) {
      selectProperty(propertyId);
    }
  };

  return (
    <div>
      <h1>Property Listings</h1>
      <ul>
        {properties.map(property => (
          <li
            key={property.id}
            onClick={() => handlePropertySelect(property.id)}
          >
            <ListingsItem {...property} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyListings;
