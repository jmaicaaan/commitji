Follow Gitmoji mapping :D 

Copy to clipboard settings - after typing the command copy it to clipboard to avoid losing it
Unicode settings - allow the emojis to be turned into the real emoji
Jira settings prompt for Smart Commits
  - Allow to specify Jira ticket
   ` ✨ - feat: [ABC-123] Implement Profile page `
  - Allow to add commits that will move jira movement (will enable adding jira ticket number!)
    - 1. Specify the workflow through settings
    - 2. Then use these settings to prompt the user where to move it
    - 3. It will result to something like 
      ` ✨ - feat: [ABC-123] Implement Profile page #code-review `
  
Basic output: ` ✨ - feat: Implement Profile page `

----
Flow:


Normal:
  - Triggers by user -> show list of mapping (based from Gitmoji) if commit is feature or fix bug -> enter message
    Output: ` ✨ - feat: Implement Profile page `

With Jira ticket
  -  Triggers by user -> show list of mapping (based from Gitmoji) if commit is feature or fix bug -> ticket number -> enter message
     Output: ` ✨ - feat: [ABC-123] Implement Profile page `
  
With Jira ticket movement
     Output: ` ✨ - feat: [ABC-123] Implement Profile page #code-review `

```
const settings = {
  jira: {
    allowIssueKeyPrompt: true,
    allowWorkflowTransitionPrompt: true,
    workflowTransitions: [
      {
        key: 'open',
        label: 'Open',
        workflowTransitionName: '#open'
      },
      {
        key: 'inProgress',
        label: 'In Progress',
        workflowTransitionName: '#in-progress'
      },
      {
        key: 'readyForCodeReview',
        label: 'Ready For Code Review',
        workflowTransitionName: '#ready-for-code-review'
      },
      {
        key: 'done',
        label: 'Done',
        workflowTransitionName: '#done',
      }
    ],
  },
};
```