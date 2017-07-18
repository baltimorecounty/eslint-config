## About
This eslint configuration extends the [Airbnb's configuration](https://www.npmjs.com/package/eslint-config-airbnb) for their [Javascript Style Guide](https://github.com/airbnb/javascript). On top of that configuration we have our own namespaces and rules that are slightly different, which are enforced through the "baltimorecounty" configuration.

## .eslintrc.json
Create or modify a ```.eslintrc.json``` [eslint config](http://eslint.org/docs/user-guide/configuring) file in the root of your project. It should read as follows:
```json
{
  "extends": [
    "airbnb",
    "baltimorecounty"
  ]
}
```

## Installation
You need to install a couple packages in your project before you can lint your javascript

1. ```npm install eslint@^3.19.0 -g```
1. ```npm install eslint@^3.19.0 --save-dev```
1. ```npm install eslint-config-airbnb --save-dev```
1. ```npm install eslint-plugin-import@^2.2.0 --save-dev```
1. ```npm install eslint-plugin-jsx-a11y@^5.1.1 --save-dev```
1. ```npm install eslint-config-baltimorecounty --save-dev``` [npm package](https://www.npmjs.com/package/eslint-config-baltimorecounty)

## Tools

### Visual Studio Code
At this time, the best way to enforce these styles is through [Visual Studio Code](https://code.visualstudio.com/). You need to download the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in order to use the configuration above.

### Gulp
TODO
