# Contributing Guide

* task board: 
* design: (in progress)

## Installing

* Clone the repository
```
git clone git@github.com:bmartin97/quick-grammar.git
```

* Open the project directory
```
cd ./quick-grammar
```

* Install dependencies
```
npm install
```

* Run development mode
```
npm run dev
```

We are using GitHub Flow branching strategy on the project. The main release branch is the `master`, and each ticket has their own branch.


## Development Workflow

1) Pick a ticket from meistertask
2) Move it to the In Development column
3) Create a branch for your ticket
    Checkout master
    ```
    git switch master
    ```
    Create branch with the following template:  
    `<tech|feature|bugfix>`**/QG-**`<ticketnumber>`**-**`<short description(dash separated)>`  
       
    __Example__: 
    ```
      git switch -c bugfix/QG-42-change-background-color
    ```
4) Finish the ticket, and push your changes to the `origin`  
      __Example__:  
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
5) Open GitHub and create a pull request
6) Move your ticket in meistertask into `Ready for reviews` columns
7) Wait for approvals
8) Merge your branch into master
9) Move your ticket in mestertask into the `Done` columns

> Note: Don't forget to add your name to the contributors part of the README.md 