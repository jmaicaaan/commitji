# Welcome to @commitji/vscode-ext 👋
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Create conventional commits with gitmojis on VSCode

### 🏠 [Homepage](https://github.com/jmaicaaan/commitji)

## Usages

### Creating a conventional commit

- Open the command pallete on VSCode (cmd + shift + p)
- Type in `commitji commit` then press enter
- Answer the following prompt questions to compose your commit message

### Configuring Commitji

#### Workflow selection

Commitji includes two workflow as of the moment (Basic Workflow and Jira Workflow). You can change this on the settings.
   
  - Basic Workflow will ask you on the following questins:
    - What is the commit type? (ex: feat, fix, style)
    - What is the commit message?

  - Jira Workflow will ask you on the following questions: 
    - What is the commit type? (ex: feat, fix, style)
    - What is the Jira Issue Key/Number (if no issue key can be found on your current branch/repo; otherwise, it won't ask you about it)
    - What is the commit message?
    - What is the Jira Workflow Transition (optional)

#### Jira Workflow Configuration
  
Commitji adds extra settings on customizing your Jira Workflow

  - Optional prompt of Jira Workflow Transition
    - If you wish to enable the Jira Workflow Transition, toggle the option `Allow Workflow Transition prompt` and you must provide an array of workflow transitions in the settings. 
    ```
    "commitji.jira.workflowTransitions": [
        {
            "key": "open",
            "label": "Open",
            "workflowTransitionName": "#open"
        },
        {
            "key": "inProgress",
            "label": "In Progress",
            "workflowTransitionName": "#in-progress"
        }
    ]
    ```
    For more details about the `workflowTransitionName` check out this [Jira documentation](https://confluence.atlassian.com/bitbucket/use-smart-commits-298979931.html).

  - Customized extraction pattern on getting your Jira Issue Key on your current branch
    - By default, it uses the format of `[A-Z]{2,5}-[0-9]{1,5}` on picking your Jira Issue Key through your current branch. You can change this if you think this doesn't match your current Git branching strategy.

#### Commit Formatting

By default, Commitji includes its preferred commit format

  - Basic Workflow Commit Format: `{{unicode}} {{commitType}}: {{commitMessage}}`

  - Jira Workflow Commit Format: `{{unicode}} {{commitType}}: {{issueKey}} {{commitMessage}} {{workflowTransitionName}}`

  - If you wish to modify this, you can change the format on the settings as well. Here are the corresponding key bindings:
    - Unicode: `{{unicode}}` - This one is for the emoji
    - Commit Type: `{{commitType}}`
    - Commit Message: `{{commitMessage}}`
    - Jira
      - Issue Key: `{{issueKey}}`
      - Workflow Transition Name: `{{workflowTransitionName}}`

## Author

👤 **JM Santos <johmichaelubas.santos@gmail.com.com**

* Website: https://github.com/jmaicaaan
* Github: [@jmaicaaan](https://github.com/jmaicaaan)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jmaicaaan/system-media/issues). 

## Show your support

Give a ⭐️ if this project helped you!
