# Neovici ESLint configuration

This is the shared ESLint configuration for Neovici packages.

## Installation guide

Add it to your package.json directly from the github repo:

```sh
yarn add --dev @neovici/eslint-config@neovici/eslint-config#semver:^1.0.0
```

Then edit your eslint config to use it:

```js
// .eslintrc.json
{
	"extends": "@neovici"
}
```

```js
// test/.eslintrc.json
{
	"extends": "@neovici/eslint-config/test-config"
}
```
