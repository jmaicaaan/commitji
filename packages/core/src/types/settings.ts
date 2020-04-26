import { App } from '../constants';

export type JiraWorkflowTransition = Record<'key' | 'label' | 'workflowTransitionName', string>;

export type Settings = {
  workflow: App.BasicWorkflow | App.JiraWorkflow;
  format?: string;
  jira: {
    allowIssueKeyPrompt: false;
    allowWorkflowTransitionPrompt: false;
    workflowTransitions: JiraWorkflowTransition[];
  };
};
