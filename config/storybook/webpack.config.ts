import { Configuration, RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { svgLoader } from '../build/loaders/svgLoader'

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.module.rules.push(svgLoader())
    config.module.rules.push(buildCssLoader(true))
    return config
}
