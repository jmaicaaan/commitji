import { window } from 'vscode';

import { Message } from '@commitji/core';

export const showJiraIssueKeyInputBox = async (): Promise<string> => {
  const result = await window.showInputBox({
    placeHolder: 'What is your Jira Issue Number?',
    ignoreFocusOut: true,
  });

  if (!result) {
    throw new Error(Message.Error.MissingJiraIssueKey);
  }

  return result;
};
