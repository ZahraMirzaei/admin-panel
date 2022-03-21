export interface TtopCustomers extends Object {
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

export type complex = TtopCustomers | TlatestTransactions;

export interface Itable {
  limit?: number;
  headData: string[];
  bodyData: TtopCustomers[] | TlatestTransactions[];
}
