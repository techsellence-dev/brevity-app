import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OrderTable {
  readonly id: string;
  readonly OrderNUmber?: string;
  readonly TaskName?: string;
  readonly TaskDesc?: string;
  readonly Time?: string;
  readonly Date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderTable, OrderTableMetaData>);
  static copyOf(source: OrderTable, mutator: (draft: MutableModel<OrderTable, OrderTableMetaData>) => MutableModel<OrderTable, OrderTableMetaData> | void): OrderTable;
}