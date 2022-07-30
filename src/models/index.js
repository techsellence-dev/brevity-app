// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NotifStatusEnum = {
  "SEEN": "SEEN",
  "UNSEEN": "UNSEEN"
};

const CurrentStatusEnum = {
  "ORDER_CREATED": "ORDER_CREATED",
  "ORDER_IN_PROGRESS": "ORDER_IN_PROGRESS",
  "ORDER_CANCELLED": "ORDER_CANCELLED",
  "ORDER_COMPLETED": "ORDER_COMPLETED"
};

const TaskStatusEnum = {
  "TASK_FORWARD": "TASK_FORWARD",
  "TASK_CANCELLED": "TASK_CANCELLED",
  "TASK_COMPLETED": "TASK_COMPLETED",
  "TASK_IN_PROGRESS": "TASK_IN_PROGRESS",
  "TASK_TO_START": "TASK_TO_START"
};

const { UserNotifications, User, Order, OrderTask, Workflow, WorkflowDefinition, TaskCommentMapping, UserOrderMapping } = initSchema(schema);

export {
  UserNotifications,
  User,
  Order,
  OrderTask,
  Workflow,
  WorkflowDefinition,
  TaskCommentMapping,
  UserOrderMapping,
  NotifStatusEnum,
  CurrentStatusEnum,
  TaskStatusEnum
};