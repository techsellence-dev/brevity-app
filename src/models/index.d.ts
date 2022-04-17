import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserOrderMappingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly isAdmin: boolean;
  readonly orders?: (UserOrderMapping | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Order {
  readonly id: string;
  readonly orderNum: string;
  readonly description: string;
  readonly CurrentData: string;
  readonly CurrentTime: string;
  readonly users?: (UserOrderMapping | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class UserOrderMapping {
  readonly id: string;
  readonly user: User;
  readonly order: Order;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserOrderMapping, UserOrderMappingMetaData>);
  static copyOf(source: UserOrderMapping, mutator: (draft: MutableModel<UserOrderMapping, UserOrderMappingMetaData>) => MutableModel<UserOrderMapping, UserOrderMappingMetaData> | void): UserOrderMapping;
}