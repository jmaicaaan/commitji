import { App } from '../constants';

type JiraWorkflowTransition = Record<'key' | 'label' | 'workflowTransitionname', string>;

export type Settings = {
  workflow: App.BasicWorkflow | App.JiraWorkflow;
  format: string;
  jira: {
    allowIssueKeyPrompt: false;
    allowWorkflowTransitionPrompt: false;
    workflowTransitions: JiraWorkflowTransition[];
  };
};
