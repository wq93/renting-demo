import React, { useContext } from 'react';
import { PropertyContext } from './utils/PropertyContext';
import ListingsDetail from './components/ListingsDetail';
import { useParams } from 'react-router-dom';

const PropertyDetails: React.FC = () => {
  const { selectedProperty } = useContext(PropertyContext);
  const { id } = useParams<{ id: string }>();
  // 对比url的查询参数和Context是否一致
  if (selectedProperty?.id !== Number(id)) {
    return <div>Not found</div>;
  }

  return <ListingsDetail {...selectedProperty}/>
};

export default PropertyDetails;
