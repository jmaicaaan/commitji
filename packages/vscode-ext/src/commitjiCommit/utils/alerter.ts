import { window } from 'vscode';

export const alerter = {
  error: (message: string) => window.showErrorMessage(message),
  info: (message: string) => window.showInformationMessage(message),
  warning: (message: string) => window.showWarningMessage(message),
};
