import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // пример настроек babel
    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //         exclude: /node_modules/,
    //     use: {
    //         loader: "babel-loader",
    //         options: {
    //             presets: ['@babel/preset-env'],
    //             плагин на экстракцию переводов (убрать)
    //             "plugins": [
    //                 ["i18next-extract", {
    //                     locales: ['ru', 'en'],
    //                     keyAsDefaultValue: true
    //                 }]
    //             ]
    //         }
    //     }
    // }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|webp|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ],
    }

    // если не используем typescript, то нужен babel
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        // use: [
        //     // MiniCssExtractPlugin - загрузка css отдельным файлом
        //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        //     // Translates CSS into CommonJS
        //     {
        //         loader: 'css-loader',
        //         options: {
        //             // localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64]',
        //             modules: {
        //                 localIdentName: isDev
        //                     ? '[path][name]__[local]--[hash:base64:5]'
        //                     : '[hash:base64:8]',
        //                 auto: (resPath: string) => Boolean(resPath.includes('.module.')),
        //             },
        //         },
        //     },
        //     // Compiles Sass to CSS
        //     'sass-loader',
        // ],
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\.\w+$/,
                        namedExport: false,
                        exportLocalsConvention: 'as-is',
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    }

    return [
        svgLoader,
        fileLoader,
        // babelLoader,
        typescriptLoader,
        sassLoader,
    ]
}
