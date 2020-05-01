import { git } from './git';
import { pipe } from './pipe';
import { pickJiraIssueKeyFromString } from './pickJiraIssueKeyFromString';
import { showJiraIssueKeyInputBox } from './showJiraIssueKeyInputBox';

import { Settings } from '../types';

export const getJiraIssueKeyOrShowPrompt = (settings: Settings) => {
  const jiraIssueKeyFromGitBranch = pipe(
    git.getBranchName,
    pickJiraIssueKeyFromString(settings.issueKeyExtractionPattern),
  )();

  if (jiraIssueKeyFromGitBranch) {
    return jiraIssueKeyFromGitBranch;
  }

  return showJiraIssueKeyInputBox();
};
