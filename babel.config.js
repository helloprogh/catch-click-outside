const presets = [
    [
        "@babel/env",
        {
            modules: false
        },
    ],
];

const plugins = [
    // "@babel/plugin-external-helpers"
]

const env = {
    "test": {
        "presets": [["@babel/env"]]
    }
}

module.exports = { presets, env, plugins };