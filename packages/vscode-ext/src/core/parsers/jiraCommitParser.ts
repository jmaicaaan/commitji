import { ParserFormatTemplate } from '../../core/constants';
import { CommitType } from '../types';
import { FormatterBuilder } from './formatterBuilder';

type JiraCommitParserConfig = {
  includeWorkflow?: boolean;
  format?: string;
};

type JiraCommitParserArgs = {
  commitType: CommitType;
  issueKey: string;
  commitMessage: string;
};

export const jiraCommitParser = ({
  format = ParserFormatTemplate.JiraCommitParser,
}: JiraCommitParserConfig = {}) => ({
  commitType: {
    emoji: { unicode },
    name,
  },
  issueKey,
  commitMessage,
}: JiraCommitParserArgs): string => {
  const formatted = new FormatterBuilder(format) 
    .create()
    .withUnicode(unicode)
    .withCommitType(name)
    .withJiraIssueKey(issueKey.toUpperCase())
    .withCommitMessage(commitMessage)
    .build();

  return formatted;
};
