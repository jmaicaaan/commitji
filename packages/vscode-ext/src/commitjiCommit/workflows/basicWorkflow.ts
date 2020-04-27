import { formatter, basicCommitParser, Settings } from '@commitji/core';

import { showCommitTypePicker, showCommitBodyInputBox, writeCommitToTerminal } from '../utils';

export const basicWorkflow = async (settings: Settings) => {
  const commitType = await showCommitTypePicker(settings);
  const commitMessage = await showCommitBodyInputBox();
  const parser = basicCommitParser({
    format: settings.format,
  });
  const basicFormatter = formatter(parser);

  const formattedCommitText = basicFormatter({
    commitType,
    commitMessage,
  });

  writeCommitToTerminal(formattedCommitText);
};
