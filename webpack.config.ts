import type { BuildMode, BuildPaths } from 'config/build/types';

import path from 'path';
import webpack from 'webpack';

import { buildWebpack } from './config/build/buildWebpack';

interface EnvVariables {
  analyzer?: boolean;
  mode?: BuildMode;
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    analyzer: env.analyzer,
    mode: env.mode ?? 'development',
    paths,
    port: env.port ?? 3000,
  });

  return config;
};
