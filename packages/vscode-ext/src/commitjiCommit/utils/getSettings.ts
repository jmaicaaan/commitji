import { workspace } from 'vscode';

import { App } from '../../core/constants';
import { Settings } from '../../core/types';

export const getSettings = () => {
  return workspace.getConfiguration(App.Name) as unknown as Settings;
};
