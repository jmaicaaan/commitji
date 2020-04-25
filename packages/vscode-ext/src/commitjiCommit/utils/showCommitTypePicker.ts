import { QuickPickItem, window } from 'vscode';

import { commitTypes, CommitType, Message } from '@commitji/core';

type ShowCommitTypePickerResult = CommitType;

const findCommitTypeByName = (name: string) => (commitType: CommitType) => commitType.name === name;

export const showCommitTypePicker = async (): Promise<ShowCommitTypePickerResult> => {
  const commitTypeToQuickPickDisplay = (commitType: CommitType): QuickPickItem => ({
    label: [commitType.emoji.unicode, commitType.name, '-', commitType.description].join(' '),
  });

  const quickPickItems = commitTypes.map(commitTypeToQuickPickDisplay);

  const result = await window.showQuickPick(quickPickItems, {
    placeHolder: 'What type of task did you do?',
    ignoreFocusOut: true,
  });

  if (!result) {
    throw new Error(Message.Error.MissingCommitType);
  }

  // Extraction
  const [commitTypeWithEmojiUnicode] = result.label.split('-');
  const [, commitTypeName] = commitTypeWithEmojiUnicode.split(' ');
  const commitTypeFromTheResult = findCommitTypeByName(commitTypeName);
  const commitTypeFromResult = commitTypes.find(commitTypeFromTheResult);

  if (!commitTypeFromResult) {
    throw new Error(Message.Error.MissingCommitType);
  }

  return commitTypeFromResult;
};
