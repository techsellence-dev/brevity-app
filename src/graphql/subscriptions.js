/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onNotificationByUserID = /* GraphQL */ `
  subscription OnNotificationByUserID($userNotificationsId: ID!) {
    onNotificationByUserID(userNotificationsId: $userNotificationsId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($email: String) {
    onCreateUser(email: $email) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      organization
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
            organization
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
          email
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
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($email: String) {
    onUpdateUser(email: $email) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      organization
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
            organization
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
          email
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
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($email: String) {
    onDeleteUser(email: $email) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      organization
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
            organization
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
          email
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
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($owner: String) {
    onCreateOrder(owner: $owner) {
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
            organization
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
          email
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($owner: String) {
    onUpdateOrder(owner: $owner) {
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
            organization
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
          email
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($owner: String) {
    onDeleteOrder(owner: $owner) {
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
            organization
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
          email
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
export const onCreateOrderTask = /* GraphQL */ `
  subscription OnCreateOrderTask($owner: String) {
    onCreateOrderTask(owner: $owner) {
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
export const onUpdateOrderTask = /* GraphQL */ `
  subscription OnUpdateOrderTask($owner: String) {
    onUpdateOrderTask(owner: $owner) {
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
export const onDeleteOrderTask = /* GraphQL */ `
  subscription OnDeleteOrderTask($owner: String) {
    onDeleteOrderTask(owner: $owner) {
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
export const onCreateWorkflow = /* GraphQL */ `
  subscription OnCreateWorkflow($owner: String) {
    onCreateWorkflow(owner: $owner) {
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
              email
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
export const onUpdateWorkflow = /* GraphQL */ `
  subscription OnUpdateWorkflow($owner: String) {
    onUpdateWorkflow(owner: $owner) {
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
              email
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
export const onDeleteWorkflow = /* GraphQL */ `
  subscription OnDeleteWorkflow($owner: String) {
    onDeleteWorkflow(owner: $owner) {
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
              email
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
export const onCreateWorkflowDefinition = /* GraphQL */ `
  subscription OnCreateWorkflowDefinition($owner: String) {
    onCreateWorkflowDefinition(owner: $owner) {
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
export const onUpdateWorkflowDefinition = /* GraphQL */ `
  subscription OnUpdateWorkflowDefinition($owner: String) {
    onUpdateWorkflowDefinition(owner: $owner) {
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
export const onDeleteWorkflowDefinition = /* GraphQL */ `
  subscription OnDeleteWorkflowDefinition($owner: String) {
    onDeleteWorkflowDefinition(owner: $owner) {
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
export const onCreateUserNotifications = /* GraphQL */ `
  subscription OnCreateUserNotifications {
    onCreateUserNotifications {
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
export const onUpdateUserNotifications = /* GraphQL */ `
  subscription OnUpdateUserNotifications {
    onUpdateUserNotifications {
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
export const onDeleteUserNotifications = /* GraphQL */ `
  subscription OnDeleteUserNotifications {
    onDeleteUserNotifications {
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
export const onCreateTaskCommentMapping = /* GraphQL */ `
  subscription OnCreateTaskCommentMapping($owner: String) {
    onCreateTaskCommentMapping(owner: $owner) {
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
export const onUpdateTaskCommentMapping = /* GraphQL */ `
  subscription OnUpdateTaskCommentMapping($owner: String) {
    onUpdateTaskCommentMapping(owner: $owner) {
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
export const onDeleteTaskCommentMapping = /* GraphQL */ `
  subscription OnDeleteTaskCommentMapping($owner: String) {
    onDeleteTaskCommentMapping(owner: $owner) {
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
export const onCreateUserOrderMapping = /* GraphQL */ `
  subscription OnCreateUserOrderMapping($email: String, $owner: String) {
    onCreateUserOrderMapping(email: $email, owner: $owner) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        organization
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
              organization
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
            email
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
              organization
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
            email
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
      email
      owner
    }
  }
`;
export const onUpdateUserOrderMapping = /* GraphQL */ `
  subscription OnUpdateUserOrderMapping($email: String, $owner: String) {
    onUpdateUserOrderMapping(email: $email, owner: $owner) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        organization
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
              organization
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
            email
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
              organization
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
            email
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
      email
      owner
    }
  }
`;
export const onDeleteUserOrderMapping = /* GraphQL */ `
  subscription OnDeleteUserOrderMapping($email: String, $owner: String) {
    onDeleteUserOrderMapping(email: $email, owner: $owner) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        organization
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
              organization
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
            email
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
              organization
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
            email
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
      email
      owner
    }
  }
`;
