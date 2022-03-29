const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([],{
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: {
                loader: 'ts-loader',
            },
        })
        return config;
    }
});
