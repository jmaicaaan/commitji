import { ParserFormatTemplate } from '../constants';
import { CommitType } from '../types';
import { FormatterBuilder } from './formatterBuilder';

type BasicCommitParserConfig = {
  format?: string;
};

type BasicCommitParserArgs = {
  commitType: CommitType;
  commitMessage: string;
};

export const basicCommitParser = ({
  format = ParserFormatTemplate.BasicCommitParser,
}: BasicCommitParserConfig = {}) => ({
  commitType: {
    emoji: { unicode },
    name,
  },
  commitMessage,
}: BasicCommitParserArgs) => {
  const formatted = new FormatterBuilder(format)
    .create()
    .withUnicode(unicode)
    .withCommitType(name)
    .withCommitMessage(commitMessage)
    .build();

  return formatted;
};
