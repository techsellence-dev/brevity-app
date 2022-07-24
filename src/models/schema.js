export const schema = {
    "models": {
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "isAdmin": {
                    "name": "isAdmin",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": true,
                    "attributes": []
                },
                "superwiserEmail": {
                    "name": "superwiserEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "isApproved": {
                    "name": "isApproved",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isEmailApproved": {
                    "name": "isEmailApproved",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isPhoneVerified": {
                    "name": "isPhoneVerified",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isGooleSignIn": {
                    "name": "isGooleSignIn",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isFacebookSignIn": {
                    "name": "isFacebookSignIn",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "isGeneralAuthSignIn": {
                    "name": "isGeneralAuthSignIn",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "orders": {
                    "name": "orders",
                    "isArray": true,
                    "type": {
                        "model": "UserOrderMapping"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "user"
                    }
                },
                "notifications": {
                    "name": "notifications",
                    "isArray": true,
                    "type": {
                        "model": "UserNotifications"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "userNotificationsId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "email"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "bySuperwisedrID",
                        "queryField": "userBySuperWisedID",
                        "fields": [
                            "superwiserEmail"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Order": {
            "name": "Order",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderID": {
                    "name": "orderID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "orderName": {
                    "name": "orderName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "currentStatus": {
                    "name": "currentStatus",
                    "isArray": false,
                    "type": {
                        "enum": "CurrentStatusEnum"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "currentData": {
                    "name": "currentData",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "currentTime": {
                    "name": "currentTime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdDate": {
                    "name": "createdDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "OrderJSON": {
                    "name": "OrderJSON",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": []
                },
                "tasks": {
                    "name": "tasks",
                    "isArray": true,
                    "type": {
                        "model": "OrderTask"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "orderTasksId"
                    }
                },
                "users": {
                    "name": "users",
                    "isArray": true,
                    "type": {
                        "model": "UserOrderMapping"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "order"
                    }
                },
                "relatedWorkFlow": {
                    "name": "relatedWorkFlow",
                    "isArray": false,
                    "type": {
                        "model": "Workflow"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "workflowWorkflowOrdersId"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Orders",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "orderID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrderName",
                        "queryField": "orderByOrderID",
                        "fields": [
                            "orderName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "update"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "OrderTask": {
            "name": "OrderTask",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "TaskID": {
                    "name": "TaskID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "taskStatus": {
                    "name": "taskStatus",
                    "isArray": false,
                    "type": {
                        "enum": "TaskStatusEnum"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "TaskName": {
                    "name": "TaskName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NextTaskName": {
                    "name": "NextTaskName",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "TaskAssignedTo": {
                    "name": "TaskAssignedTo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "isFirstUser": {
                    "name": "isFirstUser",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "TaskDescription": {
                    "name": "TaskDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "UserFilePathList": {
                    "name": "UserFilePathList",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "AssignedTimeStamp": {
                    "name": "AssignedTimeStamp",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TaskCompletionTime": {
                    "name": "TaskCompletionTime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "DueDate": {
                    "name": "DueDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": true,
                    "attributes": []
                },
                "orderTasksId": {
                    "name": "orderTasksId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "OrderTasks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "TaskID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTaskAssignedTo",
                        "queryField": "taskByAsssignedUSer",
                        "fields": [
                            "TaskAssignedTo",
                            "TaskName"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byorderTasksId",
                        "queryField": "taskByorderTasksId",
                        "fields": [
                            "orderTasksId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "update"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Workflow": {
            "name": "Workflow",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "workflowName": {
                    "name": "workflowName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "workflowname": {
                    "name": "workflowname",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "workflowOrders": {
                    "name": "workflowOrders",
                    "isArray": true,
                    "type": {
                        "model": "Order"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "workflowWorkflowOrdersId"
                    }
                },
                "workflowdefinitions": {
                    "name": "workflowdefinitions",
                    "isArray": true,
                    "type": {
                        "model": "WorkflowDefinition"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "workflowWorkflowdefinitionsId"
                    }
                },
                "WorkFlowJSON": {
                    "name": "WorkFlowJSON",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": true,
                    "attributes": []
                },
                "WorkFlowDescription": {
                    "name": "WorkFlowDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "SaveAsDraft": {
                    "name": "SaveAsDraft",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "CreatedBy": {
                    "name": "CreatedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "OwnedBy": {
                    "name": "OwnedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Workflows",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "workflowName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "WorkflowDefinition": {
            "name": "WorkflowDefinition",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "workflowdefinitionid": {
                    "name": "workflowdefinitionid",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NodeName": {
                    "name": "NodeName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NextNodeName": {
                    "name": "NextNodeName",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "Description": {
                    "name": "Description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "isRootNode": {
                    "name": "isRootNode",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": true,
                    "attributes": []
                },
                "WorkFlowName": {
                    "name": "WorkFlowName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "workflowWorkflowdefinitionsId": {
                    "name": "workflowWorkflowdefinitionsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "WorkflowDefinitions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byNodeName",
                        "queryField": "nodeByNodeandWorkFlowName",
                        "fields": [
                            "NodeName",
                            "WorkFlowName"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UserNotifications": {
            "name": "UserNotifications",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "connectedUser": {
                    "name": "connectedUser",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "userNotificationsId"
                    }
                },
                "NotificationStatus": {
                    "name": "NotificationStatus",
                    "isArray": false,
                    "type": {
                        "enum": "NotifStatusEnum"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "NotificationContent": {
                    "name": "NotificationContent",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "NotifyTime": {
                    "name": "NotifyTime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserNotifications",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byNotifStatus",
                        "queryField": "userByNotifStatus",
                        "fields": [
                            "NotificationStatus"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read",
                                    "update",
                                    "create"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TaskCommentMapping": {
            "name": "TaskCommentMapping",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "commentPath": {
                    "name": "commentPath",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "filePath": {
                    "name": "filePath",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "orderTaskID": {
                    "name": "orderTaskID",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TaskCommentMappings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "commentPath"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byFilePath",
                        "queryField": "commentByFilePath",
                        "fields": [
                            "filePath"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UserOrderMapping": {
            "name": "UserOrderMapping",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "userID"
                    }
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": {
                        "model": "Order"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "orderID"
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserOrderMappings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byOrder",
                        "fields": [
                            "orderID"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "CurrentStatusEnum": {
            "name": "CurrentStatusEnum",
            "values": [
                "ORDER_CREATED",
                "ORDER_IN_PROGRESS",
                "ORDER_CANCELLED",
                "ORDER_COMPLETED"
            ]
        },
        "TaskStatusEnum": {
            "name": "TaskStatusEnum",
            "values": [
                "TASK_FORWARD",
                "TASK_CANCELLED",
                "TASK_COMPLETED",
                "TASK_IN_PROGRESS",
                "TASK_TO_START"
            ]
        },
        "NotifStatusEnum": {
            "name": "NotifStatusEnum",
            "values": [
                "SEEN",
                "UNSEEN"
            ]
        }
    },
    "nonModels": {},
    "version": "6fba51fde4490a41069eda1b45fed82b"
};