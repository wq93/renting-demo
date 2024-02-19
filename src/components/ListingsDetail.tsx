/* 房产详情组件 */
import { PropertyDetail } from '../utils/propertyData';
const ListingsItem: React.FC<PropertyDetail> = (props) => {
  const {
    id,
    propertyName,
    address,
    numberOfUnits,
    propertyManager,
    monthlyRent,
    status,
    propertyDetails
  } = props;

  return (
    <div>
      <h1>{propertyName}</h1>
      <p>ID: {id}</p>
      <p>Address: {address.street}, {address.city}, {address.state} {address.zipCode}</p>
      <p>Number of Units: {numberOfUnits}</p>
      <p>Property Manager: {propertyManager.name} ({propertyManager.contact})</p>
      <p>Monthly Rent: ${monthlyRent}</p>
      <p>Status: {status}</p>

      <h2>Property Details:</h2>
      <ul>
        {Object.keys(propertyDetails).map(key => (
          <li key={key}>
            <strong>{key}: </strong>
            {propertyDetails[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListingsItem;
