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
2. `QG` - Project code (Quick Grammar)
3. `ticket number` - Ticket ID (Meistertask)
4. `short description` - Your short description of the ticket/branch. Must be short and meaningful with separated by dashes

### Commits

**Use imperative verb form** in commit messages.

Read More: https://www.gitkraken.com/learn/git/best-practices/git-commit-message#using-imperative-verb-form

**Don't use --no-verify flag** while commiting your changes. It bypasses the pre-commit hook.

## Style Guide

- Prefer functional component with hooks over class based components
- Use function definition over arrow function where possible (except callbacks for example);
- Use SCSS Modules with the following naming convention: `<componentname>.module.scss`
- Use Pascal casing for component names e.g.: `Home.jsx`
- Use Camel casing for function names, states, variables, contants e.g.: `getOptions()`
- Use upper case snake case for constants wich defined on top level or high level. e.g: `MAX_VALID_TRIES = 3`
- Prefer array map functions over for loops.
- Keep the functions as smalls and possible
- Avoid flag parameters for functions
- use `const`` by default, change it to `let`` if you have to reassign the value.
- don't use `var`

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
