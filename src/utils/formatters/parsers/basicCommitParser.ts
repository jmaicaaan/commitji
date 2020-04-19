import { QuickPickItem } from 'vscode';

type BasicCommitParserArgs = {
  quickPickItem: QuickPickItem,
  commitBodyText: string,
};

export const basicCommitParser = ({
  quickPickItem: {
    label,
  },
  commitBodyText,
}: BasicCommitParserArgs) => {
  const [commitTypeWithEmojiUnicode] = label.split('-');
  const [emojiUnicode, commitType] = commitTypeWithEmojiUnicode.split(' ');

  const formatted = `${emojiUnicode} - ${commitType}: ${commitBodyText}`;
  return formatted;
};
