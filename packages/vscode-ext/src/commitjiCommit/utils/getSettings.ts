import { workspace } from 'vscode';

import { App, Settings } from '@commitji/core';

export const getSettings = () => {
  return workspace.getConfiguration(App.Name) as unknown as Settings;
};
