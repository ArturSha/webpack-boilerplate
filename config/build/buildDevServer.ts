import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types";


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        // если раздавать статику через nginx То надо делать проксирование на Index.html
        historyApiFallback: true,
        hot: true,
        open: true,
        port: options.port ?? 3000
    }
}