import { workspace } from 'vscode';
import { resolve } from 'path';
import { readFileSync } from 'fs';

import { App } from '@commitji/core';

import { Settings } from '../types';

const clean = (settings: Settings): Settings => ({
  ...settings,
  // Strings will result to "" and that will not trigger the default values
  format: settings.format || undefined,
  commitTypes: settings.commitTypes || [],
  ...settings.jira && {
    jira: {
      ...settings.jira,
      // Safely ensure that the default extraction pattern will always be there
      // https://stackoverflow.com/questions/19322669/regular-expression-for-a-jira-identifier/30518972#30518972
      issueKeyExtractionPattern: settings.jira.issueKeyExtractionPattern || '((?<!([A-Z]{2,10})-?)[A-Z]+-\d+)',
    },
  }
});

export const getSettings = () => {
  const packageJSONSettings = getSettingsInPackageJSON();

  if (packageJSONSettings) {
    return clean(packageJSONSettings) as unknown as Settings;
  }

  return clean(
    workspace.getConfiguration(App.Name) as unknown as Settings
  );
};

const getSettingsInPackageJSON = () => {
  const path = [...workspace.workspaceFolders || []].shift()?.uri.path || '';

  try {
    const manifestPath = resolve(path, 'package.json');
    const packageJSON = JSON.parse(readFileSync(manifestPath, {
      encoding: 'utf8',
    }));
    const settings = packageJSON['commitji'];
    return settings;
  } catch (error) {
    return;
  }
};
