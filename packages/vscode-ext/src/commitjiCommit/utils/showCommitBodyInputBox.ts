import { window } from 'vscode';

import { Message } from '@commitji/core';

export const showCommitBodyInputBox = async (): Promise<string> => {
  const result = await window.showInputBox({
    placeHolder: 'What did you do with your task?',
    ignoreFocusOut: true,
  });

  if (!result) {
    throw new Error(Message.Error.MissingCommitBody);
  }
  return result;
};
