import {Configuration} from "webpack";

import type { BuildOptions } from "./types";


export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        alias: {
            '@': options.paths.src,
        },
        extensions: ['.tsx', '.ts', '.js'],
    }
}