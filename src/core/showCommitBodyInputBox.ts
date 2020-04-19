import { window } from 'vscode';

export const showCommitBodyInputBox = () => {
  return window.showInputBox({
    placeHolder: 'What did you do with your task?',
    ignoreFocusOut: true,
  });
};
