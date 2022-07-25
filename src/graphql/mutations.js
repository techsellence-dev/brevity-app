/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderTask = /* GraphQL */ `
  mutation CreateOrderTask(
    $input: CreateOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    createOrderTask(input: $input, condition: $condition) {
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
export const updateOrderTask = /* GraphQL */ `
  mutation UpdateOrderTask(
    $input: UpdateOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    updateOrderTask(input: $input, condition: $condition) {
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
export const deleteOrderTask = /* GraphQL */ `
  mutation DeleteOrderTask(
    $input: DeleteOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    deleteOrderTask(input: $input, condition: $condition) {
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
export const createWorkflow = /* GraphQL */ `
  mutation CreateWorkflow(
    $input: CreateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    createWorkflow(input: $input, condition: $condition) {
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
export const updateWorkflow = /* GraphQL */ `
  mutation UpdateWorkflow(
    $input: UpdateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    updateWorkflow(input: $input, condition: $condition) {
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
export const deleteWorkflow = /* GraphQL */ `
  mutation DeleteWorkflow(
    $input: DeleteWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    deleteWorkflow(input: $input, condition: $condition) {
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
export const createWorkflowDefinition = /* GraphQL */ `
  mutation CreateWorkflowDefinition(
    $input: CreateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    createWorkflowDefinition(input: $input, condition: $condition) {
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
export const updateWorkflowDefinition = /* GraphQL */ `
  mutation UpdateWorkflowDefinition(
    $input: UpdateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    updateWorkflowDefinition(input: $input, condition: $condition) {
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
export const deleteWorkflowDefinition = /* GraphQL */ `
  mutation DeleteWorkflowDefinition(
    $input: DeleteWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    deleteWorkflowDefinition(input: $input, condition: $condition) {
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
export const createUserNotifications = /* GraphQL */ `
  mutation CreateUserNotifications(
    $input: CreateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    createUserNotifications(input: $input, condition: $condition) {
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
    }
  }
`;
export const updateUserNotifications = /* GraphQL */ `
  mutation UpdateUserNotifications(
    $input: UpdateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    updateUserNotifications(input: $input, condition: $condition) {
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
    }
  }
`;
export const deleteUserNotifications = /* GraphQL */ `
  mutation DeleteUserNotifications(
    $input: DeleteUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    deleteUserNotifications(input: $input, condition: $condition) {
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
    }
  }
`;
export const createTaskCommentMapping = /* GraphQL */ `
  mutation CreateTaskCommentMapping(
    $input: CreateTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    createTaskCommentMapping(input: $input, condition: $condition) {
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
export const updateTaskCommentMapping = /* GraphQL */ `
  mutation UpdateTaskCommentMapping(
    $input: UpdateTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    updateTaskCommentMapping(input: $input, condition: $condition) {
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
export const deleteTaskCommentMapping = /* GraphQL */ `
  mutation DeleteTaskCommentMapping(
    $input: DeleteTaskCommentMappingInput!
    $condition: ModelTaskCommentMappingConditionInput
  ) {
    deleteTaskCommentMapping(input: $input, condition: $condition) {
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
export const createUserOrderMapping = /* GraphQL */ `
  mutation CreateUserOrderMapping(
    $input: CreateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    createUserOrderMapping(input: $input, condition: $condition) {
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
export const updateUserOrderMapping = /* GraphQL */ `
  mutation UpdateUserOrderMapping(
    $input: UpdateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    updateUserOrderMapping(input: $input, condition: $condition) {
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
export const deleteUserOrderMapping = /* GraphQL */ `
  mutation DeleteUserOrderMapping(
    $input: DeleteUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    deleteUserOrderMapping(input: $input, condition: $condition) {
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
