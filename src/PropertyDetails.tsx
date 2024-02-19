import React from 'react';
import { useParams } from 'react-router-dom';
import { usePropertyContext } from '../utils/PropertyContext';

const PropertyDetails: React.FC = () => {
  const { properties } = usePropertyContext();
  const { id } = useParams<{ id: string }>();
  // @ts-ignore
  const property = properties.find(prop => prop.id === parseInt(id, 10));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.price}</p>
      <p>{property.description}</p>
    </div>
  );
};

export default PropertyDetails;
