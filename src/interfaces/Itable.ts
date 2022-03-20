export type TtopCustomers = {
  username: string;
  order: number;
  price: string;
};

export type TlatestTransactions = {
  orderId: string;
  customer: string;
  totalPrice: string;
  date: string;
  status: string;
};

export interface Itable {
  limit?: number;
  headData: string[];
  bodyData: TtopCustomers[];
  renderBody: (item: TtopCustomers, index: number) => void;
}
