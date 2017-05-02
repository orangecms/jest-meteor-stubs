## About
Testing Meteor code is very slow when using the built-in `meteor test` command.
These stubs will help you get rid of the dependencies which are not present in
your project's `node_modules` directory. Use the setup below which does most of
the actual magic. :)

## Installation
`npm i -D jest-meteor-stubs` or `yarn add -D jest-meteor-stubs`

## How it works
Jest preprocesses the files to be executed through the test runner. When pulling
in dependencies, i.e. using `require` (in ES6 `import`), similar to the default
behavior of Node.js, the resolver will look for them in a local directory named
`node_modules`. However, Meteor injects additional modules when running `meteor`
instead of plain Node.js, which do not reside in this directory. Jest allows you
to overcome this issue by providing additional locations where the load should
look for modules.

## Usage
Add this module's `lib/` directory to the `modulePaths` in the `jest` section of
your `package.json` file. Here is a short example:

```json
  "jest": {
    "modulePaths": [
      "<rootDir>/node_modules",
      "<rootDir>/node_modules/jest-meteor-stubs/lib"
    ]
  }
```

For Meteor packages, you will need to rewrite the module names to use `_`
instead of `:` for the namespaces as `:` is not allowed by some file/operating
systems:
```json
  "jest": {
    "moduleNameMapper": {
      "^(.*):(.*)$": "$1_$2"
    },
    "modulePaths": [
      "<rootDir>/node_modules",
      "<rootDir>/node_modules/jest-meteor-stubs/lib"
    ]
  }
```
