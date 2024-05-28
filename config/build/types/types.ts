export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  public: string;
  src: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
  analyzer?: boolean;
  mode: BuildMode;
  paths: BuildPaths;
  port: number;
}
