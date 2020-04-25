import { Settings } from '../../core/types';

import { basicWorkflow, jiraWorkflow } from '../workflows';
import { App } from '../../core/constants';

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
