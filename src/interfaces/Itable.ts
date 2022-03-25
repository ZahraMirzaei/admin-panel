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

export interface IProductsTable {
  ID: number | string;
  product: string;
  inventory: number;
  price: string;
  category: string;
}

export type complex =
  | ItopCustomers
  | TlatestTransactions
  | IcustomersTable
  | IProductsTable;

export interface Itable {
  limit?: number;
  headData: string[];
  bodyData:
    | ItopCustomers[]
    | TlatestTransactions[]
    | IcustomersTable[]
    | IProductsTable[];
}
