import { workspace } from 'vscode';

import { App, Settings } from '@commitji/core';

const clean = (settings: Settings): Settings => ({
  ...settings,
  // Strings will result to "" and that will not trigger the default values
  format: settings.format || undefined
});

export const getSettings = () => {
  return clean(
    workspace.getConfiguration(App.Name) as unknown as Settings
  );
};
