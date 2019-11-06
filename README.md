# eslint-plugin-manage-attributes

Manage attributes on specified components

Inspired by [eslint-plugin-idiomatic-jsx](https://github.com/danrigsby/eslint-plugin-idiomatic-jsx)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-manage-attributes`:

```
$ npm install eslint-plugin-manage-attributes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-manage-attributes` globally.

## Usage

Add `manage-attributes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["manage-attributes"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "manage-attributes/rule-name": 2
  }
}
```

## Supported Rules

- [require-attributes](docs/rules/require-attributes.md): Require specified `attributes` on specified `components` to be defined.

## License

`eslint-plugin-manage-attributes` is licensed under the [MIT License](LICENSE).
