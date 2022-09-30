const isDevelopment = process.env.NODE_ENV === 'development';

const presets = [

    '@babel/preset-typescript',
    '@babel/preset-env',
    [
        '@babel/preset-react',
        {
            runtime: 'automatic',
        },
    ],
    
];

module.exports = {
    presets,
    plugins: [isDevelopment && 'react-refresh/babel'].filter(
        Boolean
    ),
};
