export const ParserFormatTemplateKey = {
  Unicode: '{{unicode}}',
  CommitType: '{{commitType}}',
  CommitMessage: '{{commitMessage}}',
  Jira: {
    IssueKey: '{{issueKey}}',
    WorkflowTransitionName: '{{workflowTransitionName}}',
  },
};
export const ParserFormatTemplate = {
  BasicCommitParser: `${ParserFormatTemplateKey.Unicode} - ${ParserFormatTemplateKey.CommitType}: ${ParserFormatTemplateKey.CommitMessage}`,
  JiraCommitParser: `${ParserFormatTemplateKey.Unicode} - ${ParserFormatTemplateKey.CommitType}: [${ParserFormatTemplateKey.Jira.IssueKey}] ${ParserFormatTemplateKey.CommitMessage}`,
};
