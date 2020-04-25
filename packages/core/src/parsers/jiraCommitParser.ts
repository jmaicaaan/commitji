import { JiraWorkflowTransition } from '@commitji/core';

import { ParserFormatTemplate } from '../constants';
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
  const pendingFormat = new FormatterBuilder(format)
    .create()
    .withUnicode(unicode)
    .withCommitType(name)
    .withJiraIssueKey(issueKey.toUpperCase())
    .withCommitMessage(commitMessage);

  if (includeWorkflow && workflowTransition) {
    return pendingFormat
      .withJiraWorkflowTransition(workflowTransition.workflowTransitionName)
      .build();
  }

  return pendingFormat.build();
};
