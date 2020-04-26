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

- Workflow selection
  - Commitji includes two workflow as of the moment (Basic Workflow and Jira Workflow). You can change this on the settings. 
  - Basic Workflow will ask you what commit type and commit message you want to include.
  - Jira Workflow will ask you commit type, Jira Issue Key/Number, Commit Message and Jira Workflow Transition (optional).
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
- Commit Formatting
  - By default, Commitji includes its preferred commit format
    - Basic Workflow Commit Format: `{{unicode}} - {{commitType}}: {{commitMessage}}`
    - Jira Workflow Commit Format: `{{unicode}} - {{commitType}}: {{issueKey}} {{commitMessage}} {{workflowTransitionName}}`
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
