export interface MenuItem {
  id: string;
  name: string;
  station: string;
  cookTime: number;      // seconds
  price: number;
}
export interface Order {
  id: string;
  bay: number;
  items: { id: string; qty: number }[];
  status: 'new'  < /dev/null |  'cooking' | 'ready' | 'delivered';
  createdAt: string;
}
