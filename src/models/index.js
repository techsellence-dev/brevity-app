// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { OrderTable } = initSchema(schema);

export {
  OrderTable
};