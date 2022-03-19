import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class OrderTable {
  readonly id: string;
  readonly OrderNUmber?: string | null;
  readonly TaskName?: string | null;
  readonly TaskDesc?: string | null;
  readonly Time?: string | null;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OrderTable, OrderTableMetaData>);
  static copyOf(source: OrderTable, mutator: (draft: MutableModel<OrderTable, OrderTableMetaData>) => MutableModel<OrderTable, OrderTableMetaData> | void): OrderTable;
}