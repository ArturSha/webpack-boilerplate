import { BuildOptions } from "../types";
import {removeDataTestIdBabelPlugin} from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader({mode}: BuildOptions) {
    const isDev = mode === 'development';
    const isProd= mode === 'production';

    const plugins = [];

    if(isProd) {
        plugins.push([
            removeDataTestIdBabelPlugin,
            {
                props: ['data-testid']
            }
        ])
    }

    return {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: {
            loader: "babel-loader",
            options: {
                plugins: plugins.length ? plugins : undefined,
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    [
                        "@babel/preset-react",
                        {
                            runtime: isDev ? 'automatic' : 'classic',
                        }
                    ]
                ],
            }
        }
    }
}