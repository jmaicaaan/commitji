import { workspace } from 'vscode';

import { App } from '@commitji/core';

import { Settings } from '../types';

const clean = (settings: Settings): Settings => ({
  ...settings,
  // Strings will result to "" and that will not trigger the default values
  format: settings.format || undefined,
  // Safely ensure that the default extraction pattern will always be there
  issueKeyExtractionPattern: settings.issueKeyExtractionPattern || '[A-Z]{2,5}-[0-9]{1,5}',
});

export const getSettings = () => {
  return clean(
    workspace.getConfiguration(App.Name) as unknown as Settings
  );
};
