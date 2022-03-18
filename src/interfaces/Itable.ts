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
  status: any;
};

export interface Itable {
  limit?: number;
  headData: string[];
  bodyData: string[];
  renderBody: (
    item: TtopCustomers | TlatestTransactions,
    index: number
  ) => void;
}
