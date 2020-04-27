import { App } from '../constants';
import { CommitType } from './commitType';

export type JiraWorkflowTransition = Record<'key' | 'label' | 'workflowTransitionName', string>;

export type Settings = {
  workflow: App.BasicWorkflow | App.JiraWorkflow;
  format?: string;
  commitTypes?: CommitType[],
  jira: {
    allowWorkflowTransitionPrompt: false;
    workflowTransitions: JiraWorkflowTransition[];
  };
};
