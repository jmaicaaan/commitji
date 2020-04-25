import { window } from 'vscode';

export const showJiraIssueKeyInputBox = () => {
  return window.showInputBox({
    placeHolder: 'What is your Jira Issue Number?',
    ignoreFocusOut: true,
  });
};
