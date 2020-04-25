import { formatter } from '../../core/formatter';
import { basicCommitParser } from '../../core/parsers';
import { Settings } from '../../core/types';

import {
  showCommitTypePicker,
  showCommitBodyInputBox,
  writeCommitToTerminal,
} from '../utils';

export const basicWorkflow = async (settings: Settings) => {
  const commitType = await showCommitTypePicker();
  const commitMessage = await showCommitBodyInputBox();
  const parser = basicCommitParser({
    format: settings.format,
  });
  const basicFormatter = formatter(parser);

  if (!commitType || !commitMessage) {
    return;
  }

  const formattedCommitText = basicFormatter({
    commitType,
    commitMessage,
  });

  writeCommitToTerminal(formattedCommitText);
};
