import { extensions } from 'vscode';

import { GitExtension } from '../types';

import { alerter } from './alerter';

export const git = {
  getBranchName: () => {
    const api = getAPI();
    
    if (!api) {
      return '';
    }

    const repository = [...api.repositories].shift();
    const head = repository?.state.HEAD;
    return head?.name || '';
  },
};

const getAPI = () => {
  const gitExtension = extensions.getExtension<GitExtension>('vscode.git')?.exports;

  if (!gitExtension) {
    alerter.error('No Git Extension found. This doesn\'t happen normally. Please update your extension');
    return;
  }

  const api = gitExtension.getAPI(1);
  return api;
};
