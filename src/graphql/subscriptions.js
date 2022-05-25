/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          }
          order {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      notifications {
        items {
          connectedUser {
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
          }
          NotificationStatus
          NotificationContent
          NotifyTime
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userNotificationsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          }
          order {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      notifications {
        items {
          connectedUser {
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
          }
          NotificationStatus
          NotificationContent
          NotifyTime
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userNotificationsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          }
          order {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      notifications {
        items {
          connectedUser {
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
          }
          NotificationStatus
          NotificationContent
          NotifyTime
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userNotificationsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      orderID
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
          NodeID
          NextNodeName
          TaskAssignedTo
          isFirstUser
          TaskDescription
          UserFilePathList
          AssignedTimeStamp
          TaskCompletionTime
          DueDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderTasksId
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
          }
          order {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        workflowOrders {
          items {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      orderID
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
          NodeID
          NextNodeName
          TaskAssignedTo
          isFirstUser
          TaskDescription
          UserFilePathList
          AssignedTimeStamp
          TaskCompletionTime
          DueDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderTasksId
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
          }
          order {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        workflowOrders {
          items {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      orderID
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
          NodeID
          NextNodeName
          TaskAssignedTo
          isFirstUser
          TaskDescription
          UserFilePathList
          AssignedTimeStamp
          TaskCompletionTime
          DueDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          orderTasksId
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
          }
          order {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        workflowOrders {
          items {
            orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            workflowWorkflowOrdersId
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const onCreateOrderTask = /* GraphQL */ `
  subscription OnCreateOrderTask {
    onCreateOrderTask {
      TaskID
      taskStatus
      NodeID
      NextNodeName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderTasksId
    }
  }
`;
export const onUpdateOrderTask = /* GraphQL */ `
  subscription OnUpdateOrderTask {
    onUpdateOrderTask {
      TaskID
      taskStatus
      NodeID
      NextNodeName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderTasksId
    }
  }
`;
export const onDeleteOrderTask = /* GraphQL */ `
  subscription OnDeleteOrderTask {
    onDeleteOrderTask {
      TaskID
      taskStatus
      NodeID
      NextNodeName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderTasksId
    }
  }
`;
export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow {
    onCreateWorkflow {
      workflowName
      workflowOrders {
        items {
          orderID
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
              NodeID
              NextNodeName
              TaskAssignedTo
              isFirstUser
              TaskDescription
              UserFilePathList
              AssignedTimeStamp
              TaskCompletionTime
              DueDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              orderTasksId
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
            }
            nextToken
            startedAt
          }
          relatedWorkFlow {
            workflowName
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
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowOrdersId
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
    }
  }
`;
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow {
    onUpdateWorkflow {
      workflowName
      workflowOrders {
        items {
          orderID
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
              NodeID
              NextNodeName
              TaskAssignedTo
              isFirstUser
              TaskDescription
              UserFilePathList
              AssignedTimeStamp
              TaskCompletionTime
              DueDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              orderTasksId
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
            }
            nextToken
            startedAt
          }
          relatedWorkFlow {
            workflowName
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
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowOrdersId
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
    }
  }
`;
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow {
    onDeleteWorkflow {
      workflowName
      workflowOrders {
        items {
          orderID
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
              NodeID
              NextNodeName
              TaskAssignedTo
              isFirstUser
              TaskDescription
              UserFilePathList
              AssignedTimeStamp
              TaskCompletionTime
              DueDate
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              orderTasksId
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
            }
            nextToken
            startedAt
          }
          relatedWorkFlow {
            workflowName
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
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          workflowWorkflowOrdersId
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
    }
  }
`;
export const onCreateWorkflowDefinition = /* GraphQL */ `
  subscription OnCreateWorkflowDefinition {
    onCreateWorkflowDefinition {
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
    }
  }
`;
export const onUpdateWorkflowDefinition = /* GraphQL */ `
  subscription OnUpdateWorkflowDefinition {
    onUpdateWorkflowDefinition {
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
    }
  }
`;
export const onDeleteWorkflowDefinition = /* GraphQL */ `
  subscription OnDeleteWorkflowDefinition {
    onDeleteWorkflowDefinition {
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
    }
  }
`;
export const onCreateUserNotifications = /* GraphQL */ `
  subscription OnCreateUserNotifications {
    onCreateUserNotifications {
      connectedUser {
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            connectedUser {
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
            }
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userNotificationsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const onUpdateUserNotifications = /* GraphQL */ `
  subscription OnUpdateUserNotifications {
    onUpdateUserNotifications {
      connectedUser {
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            connectedUser {
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
            }
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userNotificationsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const onDeleteUserNotifications = /* GraphQL */ `
  subscription OnDeleteUserNotifications {
    onDeleteUserNotifications {
      connectedUser {
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            connectedUser {
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
            }
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userNotificationsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const onCreateUserOrderMapping = /* GraphQL */ `
  subscription OnCreateUserOrderMapping {
    onCreateUserOrderMapping {
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            connectedUser {
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
            }
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userNotificationsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        orderID
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
            NodeID
            NextNodeName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            orderTasksId
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowOrders {
            items {
              orderID
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUserOrderMapping = /* GraphQL */ `
  subscription OnUpdateUserOrderMapping {
    onUpdateUserOrderMapping {
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            connectedUser {
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
            }
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userNotificationsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        orderID
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
            NodeID
            NextNodeName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            orderTasksId
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowOrders {
            items {
              orderID
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUserOrderMapping = /* GraphQL */ `
  subscription OnDeleteUserOrderMapping {
    onDeleteUserOrderMapping {
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        notifications {
          items {
            connectedUser {
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
            }
            NotificationStatus
            NotificationContent
            NotifyTime
            id
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            userNotificationsId
          }
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        orderID
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
            NodeID
            NextNodeName
            TaskAssignedTo
            isFirstUser
            TaskDescription
            UserFilePathList
            AssignedTimeStamp
            TaskCompletionTime
            DueDate
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            orderTasksId
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
            }
            order {
              orderID
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
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
        relatedWorkFlow {
          workflowName
          workflowOrders {
            items {
              orderID
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
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
