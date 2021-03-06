import {
  formatter,
  jiraCommitParser,
} from '@commitji/core';

import {
  showCommitTypePicker,
  showCommitBodyInputBox,
  showJiraWorkflowTransitionPicker,
  writeCommitToTerminal,
  getJiraIssueKeyOrShowPrompt,
} from '../utils';
import { Settings } from '../types';

export const jiraWorkflow = async (settings: Settings) => {
  const commitType = await showCommitTypePicker(settings);
  const issueKey = await getJiraIssueKeyOrShowPrompt(settings);
  const commitMessage = await showCommitBodyInputBox();
  const workflowTransition = await showJiraWorkflowTransitionPicker(settings);
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

  writeCommitToTerminal(formattedCommitText, settings.autoCommit);
};
