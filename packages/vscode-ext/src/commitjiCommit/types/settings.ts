import { Settings as CommitjiSettings } from '@commitji/core';

type ExtendedJiraSettings = Pick<CommitjiSettings, 'jira'> & {
  issueKeyExtractionPattern: string;
};
export type Settings = CommitjiSettings & {
  // Auto commit is currently available on VSCode extension
  autoCommit: boolean;
  jira: ExtendedJiraSettings;
};
