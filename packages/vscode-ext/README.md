# Welcome to @commitji/vscode-ext 👋
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Create conventional commits with gitmojis on VSCode

### 🏠 [Homepage](https://github.com/jmaicaaan/commitji)

## Demo

- Basic Workflow

![commitji-basic-workflow](https://user-images.githubusercontent.com/13105222/80914129-31d93100-8d7c-11ea-93b4-216d3f4afda3.gif)

- Jira Workflow

![commitji-jira-workflow](https://user-images.githubusercontent.com/13105222/80914128-2ede4080-8d7c-11ea-85e8-043763d37fbb.gif)

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
    - By default, it uses the format of `((?<!([A-Z]{2,10})-?)[A-Z]+-\d+)` on picking your Jira Issue Key through your current branch. You can change this if you think this doesn't match your current Git branching strategy. This is based from the Jira as it is said [here](https://stackoverflow.com/questions/19322669/regular-expression-for-a-jira-identifier/30518972#30518972).

    ```
    "commitji.jira.issueKeyExtractionPattern": "((?<!([A-Z]{2,10})-?)[A-Z]+-\\d+)"
    ```

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

#### Auto Commmit

Commitji allows you to configure if you want it to auto-commit your Git commit without you manually executing the command. By default, it is on `false`.

## Author

👤 **JM Santos** <johmichaelubas.santos@gmail.com>

* Website: https://github.com/jmaicaaan
* Github: [@jmaicaaan](https://github.com/jmaicaaan)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jmaicaaan/system-media/issues).

## Show your support

Give a ⭐️ if this project helped you!
