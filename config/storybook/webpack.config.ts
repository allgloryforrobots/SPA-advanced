import webpack, { Configuration, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { svgLoader } from '../build/loaders/svgLoader'

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        // порядок модулей важен
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.unshift(paths.src)
    console.log(config.resolve.modules)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.module.rules.push(svgLoader())
    config.module.rules.push(buildCssLoader(true))

    config.plugins.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
    }),)

    return config
}
