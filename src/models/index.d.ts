import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserOrderMappingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserOrderMapping {
  readonly id: string;
  readonly OrderNumber?: string;
  readonly UserEmail?: string;
  readonly CreatedAt?: string;
  readonly UpdateAt?: string;
  readonly userFiles?: string;
  readonly NextAssessors?: string;
  readonly usertableID: string;
  readonly ordertableID: string;
  readonly isSourceNode?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserOrderMapping, UserOrderMappingMetaData>);
  static copyOf(source: UserOrderMapping, mutator: (draft: MutableModel<UserOrderMapping, UserOrderMappingMetaData>) => MutableModel<UserOrderMapping, UserOrderMappingMetaData> | void): UserOrderMapping;
}

export declare class UserTable {
  readonly id: string;
  readonly username?: string;
  readonly useremail?: string;
  readonly isadmin?: boolean;
  readonly UserOrderMappings?: (UserOrderMapping | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserTable, UserTableMetaData>);
  static copyOf(source: UserTable, mutator: (draft: MutableModel<UserTable, UserTableMetaData>) => MutableModel<UserTable, UserTableMetaData> | void): UserTable;
}

export declare class OrderTable {
  readonly id: string;
  readonly OrderNUmber?: string;
  readonly TaskName?: string;
  readonly TaskDesc?: string;
  readonly Time?: string;
  readonly Date?: string;
  readonly UserOrderMappings?: (UserOrderMapping | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OrderTable, OrderTableMetaData>);
  static copyOf(source: OrderTable, mutator: (draft: MutableModel<OrderTable, OrderTableMetaData>) => MutableModel<OrderTable, OrderTableMetaData> | void): OrderTable;
}