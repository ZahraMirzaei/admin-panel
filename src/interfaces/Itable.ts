export interface ItopCustomers extends Object {
  username: string;
  order: number;
  price: string;
}

export type TlatestTransactions = {
  orderId: string;
  customer: string;
  totalPrice: string;
  date: string;
  status: string;
};

export interface IcustomersTable {
  ID: number | string;
  userName: string;
  email: string;
  phoneNumber: string;
  totalOrders: number;
  totalSpend: string;
  location: string;
}

export type complex = ItopCustomers | TlatestTransactions | IcustomersTable;
export interface Itable {
  limit?: number;
  headData: string[];
  bodyData: ItopCustomers[] | TlatestTransactions[] | IcustomersTable[];
}
