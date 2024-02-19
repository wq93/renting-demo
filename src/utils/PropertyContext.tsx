/*
* Context API 状态管理
* 使用 Context API 在 `PropertyListings` 和`PropertyDetails` 组件之间高效处理状态, 示例代码如下:
* 注: 日常工作中可在PropertyDetails组件通过url查询参数传递的房产id, 异步获取房产详情数据
* */
import { createContext, useEffect, useState, ReactNode } from 'react';

import {
  PropertyListing,
  PropertyDetail,
  mockPropertyListings,
  mockPropertyDetails
} from '../utils/propertyData';

/*
 * PropertyContextType:
 * - properties: 房屋列表
 * - selectedProperty: 选中房屋详情
 * - selectProperty: 设置选中房屋详情方法
 */
interface PropertyContextType {
  properties: PropertyListing[];
  selectedProperty: PropertyDetail | null;
  selectProperty: (propertyId: number) => void;
}

const PropertyContext = createContext<PropertyContextType>({
  properties: [],
  selectedProperty: null,
  selectProperty: () => {},
});

export const PropertyProvider: React.FC<{children: ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);

  const [selectedProperty, setSelectedProperty] = useState<PropertyDetail | null>(null);

  // 使用存储库模式进行数据管理：实现存储库模式，模拟获取房产列表数据的过程
  useEffect(() =>{
    // 模拟获取房产列表数据, 房产详情列表同理
    setProperties(mockPropertyListings)
  }, [])

  // 设置选中房产数据
  const selectProperty = (propertyId: number) => {
    const selectedProperty = mockPropertyDetails.find(property => property.id === propertyId);
    setSelectedProperty(selectedProperty as PropertyDetail);
  };

  return (
    <PropertyContext.Provider value={{ properties, selectedProperty, selectProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};

export { PropertyContext };
