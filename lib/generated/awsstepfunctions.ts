import { Actions, PolicyStatement, ResourceTypes } from "../shared";

/**
 * Statement provider for service [states](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsstepfunctions.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class States extends PolicyStatement {
  public servicePrefix = 'states';
  protected actionList: Actions = {
    "CreateActivity": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html",
      "description": "Creates an activity. Activities must poll Step Functions using the GetActivityTask and respond using SendTask* API calls.",
      "accessLevel": "Write",
      "resourceTypes": {
        "activity": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateStateMachine": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html",
      "description": "Creates a state machine.",
      "accessLevel": "Write",
      "resourceTypes": {
        "statemachine": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteActivity": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html",
      "description": "Deletes an activity.",
      "accessLevel": "Write",
      "resourceTypes": {
        "activity": {
          "required": true
        }
      }
    },
    "DeleteStateMachine": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html",
      "description": "Deletes a state machine.",
      "accessLevel": "Write",
      "resourceTypes": {
        "statemachine": {
          "required": true
        }
      }
    },
    "DescribeActivity": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html",
      "description": "Describes an activity.",
      "accessLevel": "Read",
      "resourceTypes": {
        "activity": {
          "required": true
        }
      }
    },
    "DescribeExecution": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html",
      "description": "Describes an execution.",
      "accessLevel": "Read",
      "resourceTypes": {
        "execution": {
          "required": true
        }
      }
    },
    "DescribeStateMachine": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html",
      "description": "Describes a state machine.",
      "accessLevel": "Read",
      "resourceTypes": {
        "statemachine": {
          "required": true
        }
      }
    },
    "DescribeStateMachineForExecution": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html",
      "description": "Describes state machine for an execution.",
      "accessLevel": "Read",
      "resourceTypes": {
        "execution": {
          "required": true
        }
      }
    },
    "GetActivityTask": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html",
      "description": "Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine.",
      "accessLevel": "Write",
      "resourceTypes": {
        "activity": {
          "required": true
        }
      }
    },
    "GetExecutionHistory": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html",
      "description": "Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events.",
      "accessLevel": "Read",
      "resourceTypes": {
        "execution": {
          "required": true
        }
      }
    },
    "ListActivities": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html",
      "description": "Lists the existing activities. The results may be split into multiple pages.",
      "accessLevel": "List"
    },
    "ListExecutions": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html",
      "description": "Lists the executions of a state machine that meet the filtering criteria. The results may be split into multiple pages.",
      "accessLevel": "Read",
      "resourceTypes": {
        "statemachine": {
          "required": true
        }
      }
    },
    "ListStateMachines": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html",
      "description": "Lists the existing state machines. The results may be split into multiple pages.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html",
      "description": "This action lists tags for an AWS Step Functions resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "activity": {
          "required": false
        },
        "statemachine": {
          "required": false
        }
      }
    },
    "SendTaskFailure": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html",
      "description": "Used by workers to report that the task identified by the taskToken failed.",
      "accessLevel": "Write"
    },
    "SendTaskHeartbeat": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html",
      "description": "Used by workers to report to the service that the task represented by the specified taskToken is still making progress.",
      "accessLevel": "Write"
    },
    "SendTaskSuccess": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html",
      "description": "Used by workers to report that the task identified by the taskToken completed successfully.",
      "accessLevel": "Write"
    },
    "StartExecution": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html",
      "description": "Starts a state machine execution.",
      "accessLevel": "Write",
      "resourceTypes": {
        "statemachine": {
          "required": true
        }
      }
    },
    "StopExecution": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html",
      "description": "Stops an execution.",
      "accessLevel": "Write",
      "resourceTypes": {
        "execution": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_TagResource.html",
      "description": "This action tags an AWS Step Functions resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "activity": {
          "required": false
        },
        "statemachine": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html",
      "description": "This action removes a tag from an AWS Step Functions resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "activity": {
          "required": false
        },
        "statemachine": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateStateMachine": {
      "url": "https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html",
      "description": "Updates a state machine.",
      "accessLevel": "Write",
      "resourceTypes": {
        "statemachine": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    }
  };
  protected resourceTypes: ResourceTypes = {
    "activity": {
      "name": "activity",
      "url": "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html",
      "arn": "arn:${Partition}:states:${Region}:${Account}:activity:${ActivityName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "execution": {
      "name": "execution",
      "url": "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-executions.html",
      "arn": "arn:${Partition}:states:${Region}:${Account}:execution:${StateMachineName}:${ExecutionId}",
      "conditionKeys": []
    },
    "statemachine": {
      "name": "statemachine",
      "url": "https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html",
      "arn": "arn:${Partition}:states:${Region}:${Account}:stateMachine:${StateMachineName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Statement provider for service [states](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsstepfunctions.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor (sid?: string) {
    super(sid);
  }

  /**
   * Creates an activity. Activities must poll Step Functions using the GetActivityTask and respond using SendTask* API calls.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html
   */
  public createActivity() {
    this.add('states:CreateActivity');
    return this;
  }

  /**
   * Creates a state machine.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateStateMachine.html
   */
  public createStateMachine() {
    this.add('states:CreateStateMachine');
    return this;
  }

  /**
   * Deletes an activity.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteActivity.html
   */
  public deleteActivity() {
    this.add('states:DeleteActivity');
    return this;
  }

  /**
   * Deletes a state machine.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DeleteStateMachine.html
   */
  public deleteStateMachine() {
    this.add('states:DeleteStateMachine');
    return this;
  }

  /**
   * Describes an activity.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeActivity.html
   */
  public describeActivity() {
    this.add('states:DescribeActivity');
    return this;
  }

  /**
   * Describes an execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeExecution.html
   */
  public describeExecution() {
    this.add('states:DescribeExecution');
    return this;
  }

  /**
   * Describes a state machine.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachine.html
   */
  public describeStateMachine() {
    this.add('states:DescribeStateMachine');
    return this;
  }

  /**
   * Describes state machine for an execution.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_DescribeStateMachineForExecution.html
   */
  public describeStateMachineForExecution() {
    this.add('states:DescribeStateMachineForExecution');
    return this;
  }

  /**
   * Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetActivityTask.html
   */
  public getActivityTask() {
    this.add('states:GetActivityTask');
    return this;
  }

  /**
   * Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the timeStamp of the events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_GetExecutionHistory.html
   */
  public getExecutionHistory() {
    this.add('states:GetExecutionHistory');
    return this;
  }

  /**
   * Lists the existing activities. The results may be split into multiple pages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListActivities.html
   */
  public listActivities() {
    this.add('states:ListActivities');
    return this;
  }

  /**
   * Lists the executions of a state machine that meet the filtering criteria. The results may be split into multiple pages.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListExecutions.html
   */
  public listExecutions() {
    this.add('states:ListExecutions');
    return this;
  }

  /**
   * Lists the existing state machines. The results may be split into multiple pages.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListStateMachines.html
   */
  public listStateMachines() {
    this.add('states:ListStateMachines');
    return this;
  }

  /**
   * This action lists tags for an AWS Step Functions resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_ListTagsForResource.html
   */
  public listTagsForResource() {
    this.add('states:ListTagsForResource');
    return this;
  }

  /**
   * Used by workers to report that the task identified by the taskToken failed.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskFailure.html
   */
  public sendTaskFailure() {
    this.add('states:SendTaskFailure');
    return this;
  }

  /**
   * Used by workers to report to the service that the task represented by the specified taskToken is still making progress.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskHeartbeat.html
   */
  public sendTaskHeartbeat() {
    this.add('states:SendTaskHeartbeat');
    return this;
  }

  /**
   * Used by workers to report that the task identified by the taskToken completed successfully.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_SendTaskSuccess.html
   */
  public sendTaskSuccess() {
    this.add('states:SendTaskSuccess');
    return this;
  }

  /**
   * Starts a state machine execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StartExecution.html
   */
  public startExecution() {
    this.add('states:StartExecution');
    return this;
  }

  /**
   * Stops an execution.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_StopExecution.html
   */
  public stopExecution() {
    this.add('states:StopExecution');
    return this;
  }

  /**
   * This action tags an AWS Step Functions resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   * - .ifAwsRequestTag()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_TagResource.html
   */
  public tagResource() {
    this.add('states:TagResource');
    return this;
  }

  /**
   * This action removes a tag from an AWS Step Functions resource.
   *
   * Access Level: Tagging
   *
   * Possible conditions:
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UntagResource.html
   */
  public untagResource() {
    this.add('states:UntagResource');
    return this;
  }

  /**
   * Updates a state machine.
   *
   * Access Level: Write
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   * - .ifAwsTagKeys()
   *
   * https://docs.aws.amazon.com/step-functions/latest/apireference/API_UpdateStateMachine.html
   */
  public updateStateMachine() {
    this.add('states:UpdateStateMachine');
    return this;
  }

  /**
   * Adds a resource of type activity to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-activities.html
   *
   * @param activityName - Identifier for the activityName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onActivity(activityName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:states:${Region}:${Account}:activity:${ActivityName}';
    arn = arn.replace('${ActivityName}', activityName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type execution to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-executions.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param executionId - Identifier for the executionId.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   */
  public onExecution(stateMachineName: string, executionId: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:states:${Region}:${Account}:execution:${StateMachineName}:${ExecutionId}';
    arn = arn.replace('${StateMachineName}', stateMachineName);
    arn = arn.replace('${ExecutionId}', executionId);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Adds a resource of type statemachine to the statement
   *
   * https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html
   *
   * @param stateMachineName - Identifier for the stateMachineName.
   * @param account - Account of the resource; defaults to empty string: all accounts.
   * @param region - Region of the resource; defaults to empty string: all regions.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onStatemachine(stateMachineName: string, account?: string, region?: string, partition?: string) {
    var arn = 'arn:${Partition}:states:${Region}:${Account}:stateMachine:${StateMachineName}';
    arn = arn.replace('${StateMachineName}', stateMachineName);
    arn = arn.replace('${Account}', account || '*');
    arn = arn.replace('${Region}', region || '*');
    arn = arn.replace('${Partition}', partition || 'aws');
    return this.on(arn);
  }

  /**
   * Tag for request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .createActivity()
   * - .createStateMachine()
   * - .tagResource()
   * - .updateStateMachine()
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:RequestTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Tag for resource
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-resourcetag
   *
   * Applies to resource types:
   * - activity
   * - statemachine
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsResourceTag(tagKey: string, value: string | string[], operator?: string) {
    return this.if(`aws:ResourceTag/${ tagKey }`, value, operator || 'StringLike');
  }

  /**
   * Tag for key
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-tagkeys
   *
   * Applies to actions:
   * - .createActivity()
   * - .createStateMachine()
   * - .tagResource()
   * - .untagResource()
   * - .updateStateMachine()
   *
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** `StringLike`
   */
  public ifAwsTagKeys(value: string | string[], operator?: string) {
    return this.if(`aws:TagKeys`, value, operator || 'StringLike');
  }
}
