import { QuickPickItem, window } from 'vscode';

import { JiraWorkflowTransition, Message } from '@commitji/core';
import { alerter } from './alerter';

const findWorkflowTransitionByName = (name: string) => (workflowTransition: JiraWorkflowTransition) => workflowTransition.workflowTransitionName === name;

export const showJiraWorkflowTransitionPicker = async (
  workflowTransitions: JiraWorkflowTransition[]
): Promise<JiraWorkflowTransition | undefined> => {
  const workflowTransitionToQuickPickDisplay = (
    workflowTransition: JiraWorkflowTransition
  ): QuickPickItem => ({
    label: [workflowTransition.label, `(${workflowTransition.workflowTransitionName})`].join(' '),
  });

  const quickPickItems = workflowTransitions.map(workflowTransitionToQuickPickDisplay);

  const result = await window.showQuickPick(quickPickItems, {
    placeHolder: 'What type of task did you do?',
    ignoreFocusOut: true,
  });

  if (!result) {
    alerter.info(Message.Info.NoJiraWorkflowTransitionName);
    return;
  }

  // Extraction
  const [commitTypeWithEmojiUnicode] = result.label.split(' ');
  const [, workflowTransitionName] = commitTypeWithEmojiUnicode.split(' ');
  const workflowTransitionFromTheResult = findWorkflowTransitionByName(workflowTransitionName);
  const workflowTransitionFromResult = workflowTransitions.find(workflowTransitionFromTheResult);

  return workflowTransitionFromResult;
};
