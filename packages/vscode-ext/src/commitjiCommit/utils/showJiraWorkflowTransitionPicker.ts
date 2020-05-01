import { QuickPickItem, window } from 'vscode';

import { JiraWorkflowTransition, Message } from '@commitji/core';
import { alerter } from './alerter';
import { Settings } from '../types';

const findWorkflowTransitionByName = (name: string) => (workflowTransition: JiraWorkflowTransition) => workflowTransition.workflowTransitionName === name;
const workflowTransitionToQuickPickDisplay = (
  workflowTransition: JiraWorkflowTransition
): QuickPickItem => ({
  label: [workflowTransition.label, `(${workflowTransition.workflowTransitionName})`].join(' '),
});

export const showJiraWorkflowTransitionPicker = async (
  settings: Settings
): Promise<JiraWorkflowTransition | undefined> => {
  const shouldPrompt = settings.jira.allowWorkflowTransitionPrompt;
  const workflowTransitions = settings.jira.workflowTransitions;
  const quickPickItems = workflowTransitions.map(workflowTransitionToQuickPickDisplay);

  if (!shouldPrompt) {
    return;
  }

  const result = await window.showQuickPick(quickPickItems, {
    placeHolder: 'What type of task did you do?',
    ignoreFocusOut: true,
  });

  if (!result) {
    alerter.info(Message.Info.NoJiraWorkflowTransitionName);
    return;
  }

  // Extraction
  const [, dirtyWorkflowTransitionName] = result.label.split('(');
  const workflowTransitionName = dirtyWorkflowTransitionName.replace('(', '').replace(')', '')
  const workflowTransitionFromTheResult = findWorkflowTransitionByName(workflowTransitionName);
  const workflowTransitionFromResult = workflowTransitions.find(workflowTransitionFromTheResult);

  return workflowTransitionFromResult;
};
