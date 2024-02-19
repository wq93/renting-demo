import { useContext, FC } from 'react';
import { PropertyContext } from './utils/PropertyContext';
import ListingsDetail from './components/ListingsDetail';
import { useParams } from 'react-router-dom';

const PropertyDetails: FC = () => {
  const { selectedProperty } = useContext(PropertyContext);
  const { id } = useParams<{ id: string }>();
  /*
  * 对比url的查询参数和Context数据是否一致
  * 注: 在房产详情页刷新页面会进入该判断条件, 原因: selectedProperty未设置找不到id
  * */
  if (selectedProperty?.id !== Number(id)) {
    return <div>Not Found</div>;
  }

  return <ListingsDetail {...selectedProperty}/>
};

export default PropertyDetails;
