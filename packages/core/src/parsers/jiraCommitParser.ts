import { ParserFormatTemplate } from '../constants';
import { CommitType, JiraWorkflowTransition } from '../types';
import { FormatterBuilder } from './formatterBuilder';

type JiraCommitParserConfig = {
  includeWorkflow?: boolean;
  format?: string;
};

type JiraCommitParserArgs = {
  commitType: CommitType;
  issueKey: string;
  commitMessage: string;
  workflowTransition?: JiraWorkflowTransition;
};

export const jiraCommitParser = ({
  format = ParserFormatTemplate.JiraCommitParser,
  includeWorkflow,
}: JiraCommitParserConfig = {}) => ({
  commitType: {
    emoji: { unicode },
    name,
  },
  issueKey,
  commitMessage,
  workflowTransition,
}: JiraCommitParserArgs): string => {
  const formatted = new FormatterBuilder(format)
    .create()
    .withUnicode(unicode)
    .withCommitType(name)
    .withJiraIssueKey(issueKey.toUpperCase())
    .withCommitMessage(commitMessage)
    .withJiraWorkflowTransition(
      includeWorkflow && workflowTransition
        ? workflowTransition.workflowTransitionName
        : ''
    ).build();

  return formatted;
};
