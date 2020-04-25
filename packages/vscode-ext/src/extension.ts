import * as vscode from 'vscode';

import { commitjiCommit } from './commitjiCommit';

export function activate(context: vscode.ExtensionContext) {
  const commitCommand = vscode.commands.registerCommand('commitji.commit', async () => {
    await commitjiCommit();
  });

  context.subscriptions.push(commitCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
