const messageSignature = 'Git Comitji:';

const withMessageSignature = (message: string) => [messageSignature, message].join(' ');

const ErrorMessage = {
  MissingCommitType: withMessageSignature(
    'Uh oh! Missing Commit Type. Please select one from the list'
  ),
  MissingCommitBody: withMessageSignature('Uh oh! Missing Commit Body'),
  MissingJiraIssueKey: withMessageSignature(
    'Uh oh! Missing Jira Issue Key. You can turn it off in the settings if you wish not to be prompted'
  ),
};

const InfoMessage = {
  NoActiveTerminal: withMessageSignature(
    "Oops! No active terminal found. But we've copied it to your clipboard!"
  ),
  NoJiraWorkflowTransitionName: withMessageSignature(
    'No workflow transition name? Be sure to pick when you are ready!'
  )
};

export const Message = {
  Error: {
    ...ErrorMessage,
  },
  Info: {
    ...InfoMessage,
  },
};
