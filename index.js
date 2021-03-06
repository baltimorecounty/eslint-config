module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "indent": ["error", "tab"],
        "no-tabs": "off",
        "linebreak-style": "off",
        "vars-on-top": "off",
        "no-shadow-restricted-names": "off",
        "no-use-before-define": "off"
    },
    "globals": {
        "$": true,
        "baltimoreCounty": true,
        "jQuery": true,
        "namespacer": true,
        "seniorExpo": true,
        "angular": true,
        "google": true,
        "bcpl": true,
        "_": true,
        "Handlebars": true
    }
};
