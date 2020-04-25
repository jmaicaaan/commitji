import { QuickPickItem, window } from 'vscode';

import { commitTypes } from '../../core/constants';
import { CommitType } from '../../core/types';

type ShowCommitTypePickerResult = CommitType;

// TODO - curried
const findCommitTypeByName = (name: string) => (commitType: CommitType) => commitType.name === name;

export const showCommitTypePicker = async (): Promise<ShowCommitTypePickerResult | undefined> => {
  const commitTypeToQuickPickDisplay = (commitType: CommitType): QuickPickItem => ({
    label: [commitType.emoji.unicode, commitType.name, '-', commitType.description].join(' '),
  });

  const quickPickItems = commitTypes.map(commitTypeToQuickPickDisplay);

  const result = await window.showQuickPick(quickPickItems, {
    placeHolder: 'What type of task did you do?',
    ignoreFocusOut: true,
  });

  if (!result) {
    return;
  }

  const [commitTypeWithEmojiUnicode] = result.label.split('-');
  const [, commitTypeName] = commitTypeWithEmojiUnicode.split(' ');
  const commitTypeFromTheResult = findCommitTypeByName(commitTypeName);
  const commitTypeFromResult = commitTypes.find(commitTypeFromTheResult);

  return commitTypeFromResult;
};
