import { workspace } from 'vscode';

import { App } from '@commitji/core';

import { Settings } from '../types';

const clean = (settings: Settings): Settings => ({
  ...settings,
  // Strings will result to "" and that will not trigger the default values
  format: settings.format || undefined,
  jira: {
    ...settings.jira,
    // Safely ensure that the default extraction pattern will always be there
    // https://stackoverflow.com/questions/19322669/regular-expression-for-a-jira-identifier/30518972#30518972
    issueKeyExtractionPattern: settings.jira.issueKeyExtractionPattern || '((?<!([A-Z]{2,10})-?)[A-Z]+-\d+)',
  },
});

export const getSettings = () => {
  return clean(
    workspace.getConfiguration(App.Name) as unknown as Settings
  );
};
