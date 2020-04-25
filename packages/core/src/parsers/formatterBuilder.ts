import { ParserFormatTemplateKey } from '../constants';

export class FormatterBuilder {
  constructor(private format: string) {}

  public create() {
    return new FormatterBuilderClosure(this.format);
  }
}

class FormatterBuilderClosure {
  private value: string;

  constructor(private readonly format: string) {
    this.value = this.format;
  }

  private mutateValue(replaceKey: string, replaceValue: string) {
    this.value = this.value.replace(replaceKey, replaceValue);
  }

  public withUnicode(value: string) {
    this.mutateValue(ParserFormatTemplateKey.Unicode, value);
    return this;
  }

  public withCommitType(value: string) {
    this.mutateValue(ParserFormatTemplateKey.CommitType, value);
    return this;
  }

  public withCommitMessage(value: string) {
    this.mutateValue(ParserFormatTemplateKey.CommitMessage, value);
    return this;
  }

  public withJiraIssueKey(value: string) {
    this.mutateValue(ParserFormatTemplateKey.Jira.IssueKey, value);
    return this;
  }

  public withJiraWorkflowTransition(value: string) {
    this.mutateValue(ParserFormatTemplateKey.Jira.WorkflowTransitionName, value);
    return this;
  }

  public build() {
    return this.value.trim();
  }
}
