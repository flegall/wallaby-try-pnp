module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                useBuiltIns: 'entry',
                modules: false,
                corejs: 3
            }
        ],
        '@babel/preset-react',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'preval'
    ],
    env: {
        production: {
            plugins: [
                // Automatically retry dynamic imports.
                './build/babel/plugins/retry-import',
                // Replace lodash imports by atomic imports.
                'lodash'
            ]
        },
        development: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        useBuiltIns: 'entry',
                        modules: false,
                        corejs: 3,
                        exclude: [
                            'transform-regenerator',
                            'transform-async-to-generator'
                        ]
                    }
                ],
                '@babel/preset-react'
            ],
            plugins: [
                'react-hot-loader/babel',
                '@babel/plugin-transform-react-jsx-source',
                // Automatically retry dynamic imports.
                './build/babel/plugins/retry-import',
                // Replace lodash imports by atomic imports.
                'lodash'
            ]
        },
        test: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                'dynamic-import-node'
            ]
        }
    }
};
