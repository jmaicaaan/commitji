import { QuickPickItem, window } from 'vscode';

import { CommitType, commitTypes } from '../constants';

export const showCommitTypePicker = () => {
  const commitTypeToQuickPickDisplay = (commitType: CommitType): QuickPickItem => ({
    label: [commitType.emoji.unicode, commitType.name, '-', commitType.description].join(' '),
  });

  const quickPickItems = commitTypes.map(commitTypeToQuickPickDisplay);

  return window.showQuickPick(quickPickItems, {
    placeHolder: 'What type of task did you do?',
    ignoreFocusOut: true,
  });
};
