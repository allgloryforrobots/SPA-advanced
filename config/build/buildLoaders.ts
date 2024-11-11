import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { svgLoader } from './loaders/svgLoader'

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

    return [
        svgLoader(),
        fileLoader,
        // babelLoader,
        typescriptLoader,
        buildCssLoader(isDev),
    ]
}
