import { Settings as CommitjiSettings } from '@commitji/core';

export type Settings = CommitjiSettings & {
  // Auto commit is currently available on VSCode extension
  autoCommit: boolean;
};
