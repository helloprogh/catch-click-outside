const presets = [
    [
        "@babel/env",
        {
            targets: "> 0.25%, not dead",
            useBuiltIns: "usage",
            modules: false,
            corejs: 2
        },
    ],
];

const env = {
    "test": {
        "presets": [["@babel/env"]]
    }
}

module.exports = { presets, env };