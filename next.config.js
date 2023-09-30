/** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig
module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.glsl$/,
            use: 'raw-loader',
        });

        return config;
    },
};
