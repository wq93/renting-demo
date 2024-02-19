import { Link } from 'react-router-dom';
import { PropertyListing } from '../utils/propertyData';

const ListingsItem: React.FC<PropertyListing> = (props) => {
  const target = `/details/${props.id}`
  return (
    <li>
      <Link to={target}>{props.propertyName}</Link>

    </li>
  );
};

export default ListingsItem;
