import { formatter, jiraCommitParser, Settings } from '@commitji/core';

import {
  showCommitTypePicker,
  showJiraIssueKeyInputBox,
  showCommitBodyInputBox,
  showJiraWorkflowTransitionPicker,
  writeCommitToTerminal,
} from '../utils';

export const jiraWorkflow = async (settings: Settings) => {
  const commitType = await showCommitTypePicker(settings);
  const issueKey = await showJiraIssueKeyInputBox();
  const commitMessage = await showCommitBodyInputBox();
  const workflowTransition = await showJiraWorkflowTransitionPicker(
    settings.jira.workflowTransitions
  );
  const parser = jiraCommitParser({
    format: settings.format,
    includeWorkflow: settings.jira.allowWorkflowTransitionPrompt
  });
  const jiraFormatter = formatter(parser);

  const formattedCommitText = jiraFormatter({
    commitType,
    commitMessage,
    issueKey,
    workflowTransition,
  });

  writeCommitToTerminal(formattedCommitText);
};
