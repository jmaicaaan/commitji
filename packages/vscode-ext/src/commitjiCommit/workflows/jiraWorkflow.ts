import { formatter } from '../../core/formatter';
import { jiraCommitParser } from '../../core/parsers';
import { Settings } from '../../core/types';

import {
  showCommitTypePicker,
  showJiraIssueKeyInputBox,
  showCommitBodyInputBox,
  writeCommitToTerminal,
} from '../utils';

export const jiraWorkflow = async (settings: Settings) => {
  const commitType = await showCommitTypePicker();
  const issueKey = await showJiraIssueKeyInputBox();
  const commitMessage = await showCommitBodyInputBox();
  const parser = jiraCommitParser({
    format: settings.format,
    includeWorkflow: settings.jira.allowWorkflowTransitionPrompt
  });
  const jiraFormatter = formatter(parser);

  if (!commitType || !commitMessage || !issueKey) {
    return;
  }

  const formattedCommitText = jiraFormatter({
    commitType,
    commitMessage,
    issueKey,
  });

  writeCommitToTerminal(formattedCommitText);
};
