import { window, env } from 'vscode';

export const writeCommitToTerminal = (commitText: string) => {
  const terminal = window.activeTerminal;
  if (!terminal) {
    return;
  }

  const commitMessage = `git commit -m "${commitText}"`;

  terminal.show();
  terminal.sendText(commitMessage);
  env.clipboard.writeText(commitMessage);
};
