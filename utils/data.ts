export interface Property {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const mockProperties: Property[] = [
  { id: 1, name: "House 1", price: 200000, description: "Beautiful house with a garden." },
  { id: 2, name: "Apartment 1", price: 150000, description: "Modern apartment in the city center." },
  { id: 3, name: "Villa 1", price: 500000, description: "Luxurious villa with a pool." },
];
