/*
 * 地址数据声明
 */
export interface Address {
  street: string; // 街道
  city: string; // 城市
  state: string; // 州/省
  zipCode: string; // 邮政编码
}
/*
 * 经理数据声明
 */
export interface Manager {
  name: string; // 姓名
  contact: string; // 联系方式
}

/*
 * 详细信息数据声明
 */
export interface Details {
  yearBuilt: number; // 建造年份
  unitTypes: string[]; // 单元类型列表
  amenities: string[]; // 设施列表
  petPolicy: string; // 宠物政策
  description: string; // 描述
  [key: string]: number | string[] | string; // 其他可能的属性
}

/*
 * 房产列表数据声明
 */
export interface PropertyListing {
  id: number; // 房产ID
  propertyName: string; // 房产名称
  address: Address; // 地址信息
  numberOfUnits: number; // 单元数量
  propertyManager: Manager; // 物业经理信息
  monthlyRent: number; // 月租金
  status: string; // 状态
}

/*
 * 房产详情数据声明
 */
export interface PropertyDetail {
  id: number; // 房产ID
  propertyName: string; // 房产名称
  address: Address; // 地址信息
  numberOfUnits: number; // 单元数量
  propertyManager: Manager; // 物业经理信息
  monthlyRent: number; // 月租金
  status: string; // 状态
  propertyDetails: Details; // 房产详细信息
}

/*
* 示例数据-房产列表
* */
export const mockPropertyListings: PropertyListing[] = [
  {
    id: 1,
    propertyName: "Sunrise Apartments",
    address: {
      street: "123 Oak Street",
      city: "Springfield",
      state: "SP",
      zipCode: "12345"
    },
    numberOfUnits: 20,
    propertyManager: {
      name: "Jane Doe",
      contact: "jane.doe@email.com"
    },
    monthlyRent: 1200,
    status: "Occupied"
  },
  {
    id: 2,
    propertyName: "Maple Townhouses",
    address: {
      street: "456 Maple Drive",
      city: "Riverdale",
      state: "RD",
      zipCode: "67890"
    },
    numberOfUnits: 15,
    propertyManager: {
      name: "John Smith",
      contact: "john.smith@email.com"
    },
    monthlyRent: 1500,
    status: "Vacant"
  },
  {
    id: 3,
    propertyName: "Lakeside Villas",
    address: {
      street: "789 Lake Road",
      city: "Laketon",
      state: "LK",
      zipCode: "10112"
    },
    numberOfUnits: 10,
    propertyManager: {
      name: "Alice Johnson",
      contact: "alice.johnson@email.com"
    },
    monthlyRent: 1800,
    status: "Under Maintenance"
  }
];

/*
* 示例数据-房产详情
* */
export const mockPropertyDetails: PropertyDetail[] = [
  {
    id: 1,
    propertyName: "Sunrise Apartments",
    address: {
      street: "123 Oak Street",
      city: "Springfield",
      state: "SP",
      zipCode: "12345"
    },
    numberOfUnits: 20,
    propertyManager: {
      name: "Jane Doe",
      contact: "jane.doe@email.com"
    },
    monthlyRent: 1200,
    status: "Occupied",
    propertyDetails: {
      yearBuilt: 2005,
      unitTypes: ["Studio", "1 Bedroom", "2 Bedroom"],
      amenities: ["Pool", "Gym", "24hr Security"],
      petPolicy: "Pets Allowed",
      description: "Sunrise Apartments offers a tranquil living experience with stunning views of the city skyline. Perfectly situated in the heart of Springfield, it provides easy access to local shopping, dining, and entertainment options."
    }
  },
  {
    id: 2,
    propertyName: "Maple Townhouses",
    address: {
      street: "456 Maple Drive",
      city: "Riverdale",
      state: "RD",
      zipCode: "67890"
    },
    numberOfUnits: 15,
    propertyManager: {
      name: "John Smith",
      contact: "john.smith@email.com"
    },
    monthlyRent: 1500,
    status: "Vacant",
    propertyDetails: {
      yearBuilt: 2010,
      unitTypes: ["2 Bedroom", "3 Bedroom", "4 Bedroom"],
      amenities: ["Private Gardens", "Parking Garage", "Fitness Center"],
      petPolicy: "Small Pets Only",
      description: "Maple Townhouses offer spacious living with modern amenities, nestled in the serene neighborhood of Riverdale. These elegant townhouses are ideal for families, featuring large living spaces and private backyards."
    }
  },
  {
    id: 3,
    propertyName: "Lakeside Villas",
    address: {
      street: "789 Lake Road",
      city: "Laketon",
      state: "LK",
      zipCode: "10112"
    },
    numberOfUnits: 10,
    propertyManager: {
      name: "Alice Johnson",
      contact: "alice.johnson@email.com"
    },
    monthlyRent: 1800,
    status: "Under Maintenance",
    propertyDetails: {
      yearBuilt: 2015,
      unitTypes: ["1 Bedroom", "2 Bedroom", "3 Bedroom"],
      amenities: ["Lakeside View", "Boat Dock", "Walking Trails"],
      petPolicy: "No Restrictions",
      description: "Lakeside Villas offers a unique living experience with stunning lakeside views and ample outdoor activities. Located in the peaceful town of Laketon, it's a perfect retreat for those who love nature and tranquility."
    }
  }
];
