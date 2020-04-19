import * as vscode from 'vscode';

import { formatter } from './utils/formatters';
import { basicCommitParser } from './utils/formatters/parsers/basicCommitParser';
import { showCommitTypePicker } from './core/showCommitTypePicker';
import { showCommitBodyInputBox } from './core/showCommitBodyInputBox';
import { writeCommitToTerminal } from './core/writeCommitToTerminal';

export function activate(context: vscode.ExtensionContext) {
  const commitCommand = vscode.commands.registerCommand('commitji.commit', async () => {
    const commitTypeResult = await showCommitTypePicker();
    const commitBodyText = await showCommitBodyInputBox();

    if (!commitTypeResult || !commitBodyText) {
      return;
    }

    const commitText = formatter({
      parser: basicCommitParser,
    }, {
      quickPickItem: commitTypeResult,
      commitBodyText,
    });
    writeCommitToTerminal(commitText);
  });

  context.subscriptions.push(commitCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
