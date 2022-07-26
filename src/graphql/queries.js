/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      isApproved
      isEmailApproved
      isPhoneVerified
      isGooleSignIn
      isFacebookSignIn
      isGeneralAuthSignIn
      orders {
        items {
          id
          userID
          orderID
          user {
            email
            name
            isAdmin
            phone
            superwiserEmail
            isApproved
            isEmailApproved
            isPhoneVerified
            isGooleSignIn
            isFacebookSignIn
            isGeneralAuthSignIn
            orders {
              nextToken
              startedAt
            }
            notifications {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          order {
            orderID
            orderName
            description
            currentStatus
            currentData
            currentTime
            createdDate
            OrderJSON
            tasks {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            relatedWorkFlow {
              workflowName
              workflowname
              WorkFlowJSON
              WorkFlowDescription
              SaveAsDraft
              CreatedBy
              OwnedBy
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      notifications {
        items {
          userNotificationsId
          NotificationStatus
          NotificationContent
          NotifyTime
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        orders {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            userNotificationsId
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        orders {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            userNotificationsId
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const userBySuperWisedID = /* GraphQL */ `
  query UserBySuperWisedID(
    $superwiserEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBySuperWisedID(
      superwiserEmail: $superwiserEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        orders {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            userNotificationsId
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($orderID: ID!) {
    getOrder(orderID: $orderID) {
      orderID
      orderName
      description
      currentStatus
      currentData
      currentTime
      createdDate
      OrderJSON
      tasks {
        items {
          TaskID
          taskStatus
          TaskName
          NextTaskName
          TaskAssignedTo
          isFirstUser
          TaskDescription
          UserFilePathList
          AssignedTimeStamp
          TaskCompletionTime
          DueDate
          orderTasksId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          orderID
          user {
            email
            name
            isAdmin
            phone
            superwiserEmail
            isApproved
            isEmailApproved
            isPhoneVerified
            isGooleSignIn
            isFacebookSignIn
            isGeneralAuthSignIn
            orders {
              nextToken
              startedAt
            }
            notifications {
              nextToken
              startedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          order {
            orderID
            orderName
            description
            currentStatus
            currentData
            currentTime
            createdDate
            OrderJSON
            tasks {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            relatedWorkFlow {
              workflowName
              workflowname
              WorkFlowJSON
              WorkFlowDescription
              SaveAsDraft
              CreatedBy
              OwnedBy
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        workflowname
        workflowOrders {
          items {
            orderID
            orderName
            description
            currentStatus
            currentData
            currentTime
            createdDate
            OrderJSON
            tasks {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            relatedWorkFlow {
              workflowName
              workflowname
              WorkFlowJSON
              WorkFlowDescription
              SaveAsDraft
              CreatedBy
              OwnedBy
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
            owner
          }
          nextToken
          startedAt
        }
        workflowdefinitions {
          items {
            workflowdefinitionid
            NodeName
            NextNodeName
            Description
            isRootNode
            WorkFlowName
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowdefinitionsId
            owner
          }
          nextToken
          startedAt
        }
        WorkFlowJSON
        WorkFlowDescription
        SaveAsDraft
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
      owner
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $orderID: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      orderID: $orderID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        orderID
        orderName
        description
        currentStatus
        currentData
        currentTime
        createdDate
        OrderJSON
        tasks {
          items {
            TaskID
            taskStatus
            TaskName
            NextTaskName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            orderTasksId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowname
          workflowOrders {
            items {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            nextToken
            startedAt
          }
          workflowdefinitions {
            items {
              workflowdefinitionid
              NodeName
              NextNodeName
              Description
              isRootNode
              WorkFlowName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowdefinitionsId
              owner
            }
            nextToken
            startedAt
          }
          WorkFlowJSON
          WorkFlowDescription
          SaveAsDraft
          CreatedBy
          OwnedBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        orderID
        orderName
        description
        currentStatus
        currentData
        currentTime
        createdDate
        OrderJSON
        tasks {
          items {
            TaskID
            taskStatus
            TaskName
            NextTaskName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            orderTasksId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowname
          workflowOrders {
            items {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            nextToken
            startedAt
          }
          workflowdefinitions {
            items {
              workflowdefinitionid
              NodeName
              NextNodeName
              Description
              isRootNode
              WorkFlowName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowdefinitionsId
              owner
            }
            nextToken
            startedAt
          }
          WorkFlowJSON
          WorkFlowDescription
          SaveAsDraft
          CreatedBy
          OwnedBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const orderByOrderID = /* GraphQL */ `
  query OrderByOrderID(
    $orderName: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderByOrderID(
      orderName: $orderName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        orderID
        orderName
        description
        currentStatus
        currentData
        currentTime
        createdDate
        OrderJSON
        tasks {
          items {
            TaskID
            taskStatus
            TaskName
            NextTaskName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            orderTasksId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowname
          workflowOrders {
            items {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            nextToken
            startedAt
          }
          workflowdefinitions {
            items {
              workflowdefinitionid
              NodeName
              NextNodeName
              Description
              isRootNode
              WorkFlowName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowdefinitionsId
              owner
            }
            nextToken
            startedAt
          }
          WorkFlowJSON
          WorkFlowDescription
          SaveAsDraft
          CreatedBy
          OwnedBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderTask = /* GraphQL */ `
  query GetOrderTask($TaskID: ID!) {
    getOrderTask(TaskID: $TaskID) {
      TaskID
      taskStatus
      TaskName
      NextTaskName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      orderTasksId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listOrderTasks = /* GraphQL */ `
  query ListOrderTasks(
    $TaskID: ID
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderTasks(
      TaskID: $TaskID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        TaskID
        taskStatus
        TaskName
        NextTaskName
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderTasks = /* GraphQL */ `
  query SyncOrderTasks(
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        TaskID
        taskStatus
        TaskName
        NextTaskName
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const taskByAsssignedUSer = /* GraphQL */ `
  query TaskByAsssignedUSer(
    $TaskAssignedTo: String!
    $TaskName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskByAsssignedUSer(
      TaskAssignedTo: $TaskAssignedTo
      TaskName: $TaskName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        TaskID
        taskStatus
        TaskName
        NextTaskName
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const taskByorderTasksId = /* GraphQL */ `
  query TaskByorderTasksId(
    $orderTasksId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskByorderTasksId(
      orderTasksId: $orderTasksId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        TaskID
        taskStatus
        TaskName
        NextTaskName
        TaskAssignedTo
        isFirstUser
        TaskDescription
        UserFilePathList
        AssignedTimeStamp
        TaskCompletionTime
        DueDate
        orderTasksId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($workflowName: String!) {
    getWorkflow(workflowName: $workflowName) {
      workflowName
      workflowname
      workflowOrders {
        items {
          orderID
          orderName
          description
          currentStatus
          currentData
          currentTime
          createdDate
          OrderJSON
          tasks {
            items {
              TaskID
              taskStatus
              TaskName
              NextTaskName
              TaskAssignedTo
              isFirstUser
              TaskDescription
              UserFilePathList
              AssignedTimeStamp
              TaskCompletionTime
              DueDate
              orderTasksId
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          users {
            items {
              id
              userID
              orderID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          relatedWorkFlow {
            workflowName
            workflowname
            workflowOrders {
              nextToken
              startedAt
            }
            workflowdefinitions {
              nextToken
              startedAt
            }
            WorkFlowJSON
            WorkFlowDescription
            SaveAsDraft
            CreatedBy
            OwnedBy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowOrdersId
          owner
        }
        nextToken
        startedAt
      }
      workflowdefinitions {
        items {
          workflowdefinitionid
          NodeName
          NextNodeName
          Description
          isRootNode
          WorkFlowName
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowdefinitionsId
          owner
        }
        nextToken
        startedAt
      }
      WorkFlowJSON
      WorkFlowDescription
      SaveAsDraft
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $workflowName: String
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkflows(
      workflowName: $workflowName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        workflowName
        workflowname
        workflowOrders {
          items {
            orderID
            orderName
            description
            currentStatus
            currentData
            currentTime
            createdDate
            OrderJSON
            tasks {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            relatedWorkFlow {
              workflowName
              workflowname
              WorkFlowJSON
              WorkFlowDescription
              SaveAsDraft
              CreatedBy
              OwnedBy
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
            owner
          }
          nextToken
          startedAt
        }
        workflowdefinitions {
          items {
            workflowdefinitionid
            NodeName
            NextNodeName
            Description
            isRootNode
            WorkFlowName
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowdefinitionsId
            owner
          }
          nextToken
          startedAt
        }
        WorkFlowJSON
        WorkFlowDescription
        SaveAsDraft
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWorkflows = /* GraphQL */ `
  query SyncWorkflows(
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkflows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        workflowName
        workflowname
        workflowOrders {
          items {
            orderID
            orderName
            description
            currentStatus
            currentData
            currentTime
            createdDate
            OrderJSON
            tasks {
              nextToken
              startedAt
            }
            users {
              nextToken
              startedAt
            }
            relatedWorkFlow {
              workflowName
              workflowname
              WorkFlowJSON
              WorkFlowDescription
              SaveAsDraft
              CreatedBy
              OwnedBy
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
            owner
          }
          nextToken
          startedAt
        }
        workflowdefinitions {
          items {
            workflowdefinitionid
            NodeName
            NextNodeName
            Description
            isRootNode
            WorkFlowName
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowdefinitionsId
            owner
          }
          nextToken
          startedAt
        }
        WorkFlowJSON
        WorkFlowDescription
        SaveAsDraft
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getWorkflowDefinition = /* GraphQL */ `
  query GetWorkflowDefinition($id: ID!) {
    getWorkflowDefinition(id: $id) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      isRootNode
      WorkFlowName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowdefinitionsId
      owner
    }
  }
`;
export const listWorkflowDefinitions = /* GraphQL */ `
  query ListWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        workflowdefinitionid
        NodeName
        NextNodeName
        Description
        isRootNode
        WorkFlowName
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowdefinitionsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWorkflowDefinitions = /* GraphQL */ `
  query SyncWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        workflowdefinitionid
        NodeName
        NextNodeName
        Description
        isRootNode
        WorkFlowName
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowdefinitionsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const nodeByNodeandWorkFlowName = /* GraphQL */ `
  query NodeByNodeandWorkFlowName(
    $NodeName: String!
    $WorkFlowName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodeByNodeandWorkFlowName(
      NodeName: $NodeName
      WorkFlowName: $WorkFlowName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        workflowdefinitionid
        NodeName
        NextNodeName
        Description
        isRootNode
        WorkFlowName
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowdefinitionsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserNotifications = /* GraphQL */ `
  query GetUserNotifications($id: ID!) {
    getUserNotifications(id: $id) {
      userNotificationsId
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserNotifications = /* GraphQL */ `
  query SyncUserNotifications(
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const userByNotifStatus = /* GraphQL */ `
  query UserByNotifStatus(
    $NotificationStatus: NotifStatusEnum!
    $sortDirection: ModelSortDirection
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByNotifStatus(
      NotificationStatus: $NotificationStatus
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userNotificationsId
        NotificationStatus
        NotificationContent
        NotifyTime
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getTaskCommentMapping = /* GraphQL */ `
  query GetTaskCommentMapping($commentPath: String!) {
    getTaskCommentMapping(commentPath: $commentPath) {
      commentPath
      filePath
      orderTaskID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listTaskCommentMappings = /* GraphQL */ `
  query ListTaskCommentMappings(
    $commentPath: String
    $filter: ModelTaskCommentMappingFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTaskCommentMappings(
      commentPath: $commentPath
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        commentPath
        filePath
        orderTaskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTaskCommentMappings = /* GraphQL */ `
  query SyncTaskCommentMappings(
    $filter: ModelTaskCommentMappingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskCommentMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        commentPath
        filePath
        orderTaskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const commentByFilePath = /* GraphQL */ `
  query CommentByFilePath(
    $filePath: String!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCommentMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentByFilePath(
      filePath: $filePath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        commentPath
        filePath
        orderTaskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserOrderMapping = /* GraphQL */ `
  query GetUserOrderMapping($id: ID!) {
    getUserOrderMapping(id: $id) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        orders {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            userNotificationsId
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      order {
        orderID
        orderName
        description
        currentStatus
        currentData
        currentTime
        createdDate
        OrderJSON
        tasks {
          items {
            TaskID
            taskStatus
            TaskName
            NextTaskName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            orderTasksId
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        users {
          items {
            id
            userID
            orderID
            user {
              email
              name
              isAdmin
              phone
              superwiserEmail
              isApproved
              isEmailApproved
              isPhoneVerified
              isGooleSignIn
              isFacebookSignIn
              isGeneralAuthSignIn
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            order {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowname
          workflowOrders {
            items {
              orderID
              orderName
              description
              currentStatus
              currentData
              currentTime
              createdDate
              OrderJSON
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowOrdersId
              owner
            }
            nextToken
            startedAt
          }
          workflowdefinitions {
            items {
              workflowdefinitionid
              NodeName
              NextNodeName
              Description
              isRootNode
              WorkFlowName
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              workflowWorkflowdefinitionsId
              owner
            }
            nextToken
            startedAt
          }
          WorkFlowJSON
          WorkFlowDescription
          SaveAsDraft
          CreatedBy
          OwnedBy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listUserOrderMappings = /* GraphQL */ `
  query ListUserOrderMappings(
    $filter: ModelUserOrderMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrderMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        orderID
        user {
          email
          name
          isAdmin
          phone
          superwiserEmail
          isApproved
          isEmailApproved
          isPhoneVerified
          isGooleSignIn
          isFacebookSignIn
          isGeneralAuthSignIn
          orders {
            items {
              id
              userID
              orderID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          notifications {
            items {
              userNotificationsId
              NotificationStatus
              NotificationContent
              NotifyTime
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        order {
          orderID
          orderName
          description
          currentStatus
          currentData
          currentTime
          createdDate
          OrderJSON
          tasks {
            items {
              TaskID
              taskStatus
              TaskName
              NextTaskName
              TaskAssignedTo
              isFirstUser
              TaskDescription
              UserFilePathList
              AssignedTimeStamp
              TaskCompletionTime
              DueDate
              orderTasksId
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          users {
            items {
              id
              userID
              orderID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          relatedWorkFlow {
            workflowName
            workflowname
            workflowOrders {
              nextToken
              startedAt
            }
            workflowdefinitions {
              nextToken
              startedAt
            }
            WorkFlowJSON
            WorkFlowDescription
            SaveAsDraft
            CreatedBy
            OwnedBy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowOrdersId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserOrderMappings = /* GraphQL */ `
  query SyncUserOrderMappings(
    $filter: ModelUserOrderMappingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserOrderMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        orderID
        user {
          email
          name
          isAdmin
          phone
          superwiserEmail
          isApproved
          isEmailApproved
          isPhoneVerified
          isGooleSignIn
          isFacebookSignIn
          isGeneralAuthSignIn
          orders {
            items {
              id
              userID
              orderID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          notifications {
            items {
              userNotificationsId
              NotificationStatus
              NotificationContent
              NotifyTime
              id
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        order {
          orderID
          orderName
          description
          currentStatus
          currentData
          currentTime
          createdDate
          OrderJSON
          tasks {
            items {
              TaskID
              taskStatus
              TaskName
              NextTaskName
              TaskAssignedTo
              isFirstUser
              TaskDescription
              UserFilePathList
              AssignedTimeStamp
              TaskCompletionTime
              DueDate
              orderTasksId
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          users {
            items {
              id
              userID
              orderID
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          relatedWorkFlow {
            workflowName
            workflowname
            workflowOrders {
              nextToken
              startedAt
            }
            workflowdefinitions {
              nextToken
              startedAt
            }
            WorkFlowJSON
            WorkFlowDescription
            SaveAsDraft
            CreatedBy
            OwnedBy
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowOrdersId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
