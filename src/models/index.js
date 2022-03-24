// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserTable, OrderTable } = initSchema(schema);

export {
  UserTable,
  OrderTable
};