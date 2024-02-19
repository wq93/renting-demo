import { Link } from 'react-router-dom';
import { PropertyListing } from '../utils/propertyData';

const ListingsItem: React.FC<PropertyListing> = (props) => {
  const { id, propertyName, address, numberOfUnits, propertyManager, monthlyRent, status } = props;
  // 详情跳转链接
  const target = `/details/${id}`
  return (
    <div
      style={{ border: '1px solid #ccc', padding: '5px', margin: '5px 0' }}>
      <Link to={target} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>{propertyName}</h2>
        <p>ID: {id}</p>
        <p>Address: {address.street}, {address.city}, {address.state} {address.zipCode}</p>
        <p>Number of Units: {numberOfUnits}</p>
        <p>Property Manager: {propertyManager.name} ({propertyManager.contact})</p>
        <p>Monthly Rent: ${monthlyRent}</p>
        <p>Status: {status}</p>
      </Link>
    </div>
  );
};

export default ListingsItem;
