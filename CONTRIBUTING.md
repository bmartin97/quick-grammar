# Contributing Guide

- task board: https://www.meistertask.com/app/project/yiGcjrtC/quick-grammar-dev-board
- design: (in progress)

## Installing

- Clone the repository

```
git clone git@github.com:bmartin97/quick-grammar.git
```

- Open the project directory

```
cd ./quick-grammar
```

- Install dependencies

```
npm install
```

- Run development mode

```
npm run dev
```

We are using GitHub Flow branching strategy on the project. The main release branch is the `master`, and each ticket has their own branch.

## Git Workflow

### Branches

Template for naming branches:  
`<tech|feature|bugfix>`**/QG-**`<ticket number>`**-**`<short description(dash separated)>`

Explanation:

1. `tech | feature | bugfix` - Ticket category (Meistertask)
2. `QC` - Project code (Quick Grammar)
3. `ticket number` - Ticket ID (Meistertask)
4. `short description` - Your short description of the ticket/branch. Must be short and meaningful with separated by dashes

### Commits

**Use imperative verb form** in commit messages.

Read More: https://www.gitkraken.com/learn/git/best-practices/git-commit-message#using-imperative-verb-form

**Don't use --no-verify flag** while commiting your changes. It bypasses the pre-commit hook.

## Development Workflow

1. Pick a ticket from meistertask
2. Move it to the In Development column
3. Create a branch for your ticket
   Checkout master
   ```
   git switch master
   ```
   Create branch:  
   **Example**:
   ```
     git switch -c bugfix/QG-42-change-background-color
   ```
4. Finish the ticket, and push your changes to the `origin`  
    **Example**:  
    Add your changes
   ```
   git add -A
   ```
   Commit your changes
   ```
   git commit -m "change backround color from blue to red"
   ```
   Push to origin
   ```
   git push -u origin bugfix/QG-42-change-background-color
   ```
5. Open GitHub and create a pull request
6. Move your ticket in meistertask into `Ready for reviews` columns
7. Wait for approvals
8. Merge your branch into master
9. Move your ticket in mestertask into the `Done` columns

> Note: Don't forget to add your name to the contributors part of the README.md
