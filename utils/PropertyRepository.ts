import { useEffect } from 'react';
import { usePropertyContext } from './PropertyContext';
import propertyData from './propertyData.json';

const usePropertyRepository = () => {
  const { setProperties } = usePropertyContext();

  useEffect(() => {
    // 模拟异步获取数据
    setTimeout(() => {
      setProperties(propertyData.properties);
    }, 500);
  }, [setProperties]);
};

export default usePropertyRepository;
