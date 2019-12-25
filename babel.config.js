// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: '10.16.1',
                },
            },
        ],
    ],
};