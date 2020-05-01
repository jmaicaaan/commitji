import { window } from 'vscode';

import { Message } from '@commitji/core';

import { alerter } from './alerter';
import { clipboard } from './clipboard';

export const writeCommitToTerminal = (commitText: string, autoCommitToTerminal = false) => {
  const commitMessage = `git commit -m "${commitText}"`;
  const terminal = window.activeTerminal;

  clipboard.copy(commitMessage);

  if (!terminal) {
    alerter.info(Message.Info.NoActiveTerminal);
    return;
  }

  terminal.show();
  terminal.sendText(commitMessage, autoCommitToTerminal);
};
