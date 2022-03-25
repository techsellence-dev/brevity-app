// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserOrderMapping, UserTable, OrderTable } = initSchema(schema);

export {
  UserOrderMapping,
  UserTable,
  OrderTable
};