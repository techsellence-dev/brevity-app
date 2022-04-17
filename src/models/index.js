// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Order, UserOrderMapping } = initSchema(schema);

export {
  User,
  Order,
  UserOrderMapping
};