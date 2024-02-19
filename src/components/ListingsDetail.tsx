import { PropertyDetail } from '../utils/propertyData';

const ListingsItem: React.FC<PropertyDetail> = (props) => {
  const {
    propertyName
  } = props;
  return (
    <div>
      <p>{propertyName}</p>

    </div>
  );
};

export default ListingsItem;
