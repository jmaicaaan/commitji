import { App } from '@commitji/core';

import { basicWorkflow, jiraWorkflow } from '../workflows';
import { Settings } from '../types';

type Workflow = {
  key: App.BasicWorkflow | App.JiraWorkflow;
  value: (settings: Settings) => Promise<void>;
};

const Workflows: Workflow[] = [
  {
    key: App.BasicWorkflow,
    value: basicWorkflow,
  },
  {
    key: App.JiraWorkflow,
    value: jiraWorkflow,
  },
];

const byWorkflowName = (name: string) => (workflow: Workflow) => workflow.key === name;

export const getWorkflow = (workflowName: string) => {
  return (Workflows.find(byWorkflowName(workflowName)) || Workflows[0]).value;
};
