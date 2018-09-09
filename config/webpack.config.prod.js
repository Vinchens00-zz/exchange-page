const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

const getClientEnvironment = require('./env');
const paths = require('./paths');

// Setup environment variables
const gitRevisionPlugin = new GitRevisionPlugin();

const commithash = gitRevisionPlugin.commithash();
const version = require(paths.appPackageJson).version;

const env = getClientEnvironment({ commithash, version });
const publicPath = process.env.PUBLIC_URL || '/';

// Assert this just to be safe.
// Development builds of React are slow and not intended for production.
if (env.stringified['process.env'].NODE_ENV !== '"production"') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  mode: 'production',
  // Don't attempt to continue if there are any errors.
  bail: true,
  entry: {
    bundle: [require.resolve('babel-polyfill'), paths.appIndexJs]
  },
  output: {
    path: paths.appBuild,
    filename: '[name].[hash:8].js',
    publicPath
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          parse: {
            // we want uglify-js to parse ecma 8 code. However, we don't want it
            // to apply any minfication steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        },
        // Use multi-process parallel running to improve the build speed
        // Default number of concurrent runs: os.cpus().length - 1
        parallel: true,
        // Enable file caching
        cache: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: paths.appSrc,
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        use: [
          // This loader parallelizes code compilation, it is optional but
          // improves compile time on larger projects
          require.resolve('thread-loader'),
          {
            loader: require.resolve('babel-loader'),
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: require.resolve('babel-loader')
          },
          {
            loader: require.resolve('svg-sprite-loader'),
            options: {
              runtimeGenerator: path.resolve(
                './svg-to-icon-component-runtime-generator'
              )
            }
          },
          require.resolve('svgo-loader')
        ]
      },
      {
        test: /\.styl$/,
        include: paths.appSrc,
        use: [
          MiniCssExtractPlugin.loader,
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebook/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  flexbox: 'no-2009'
                })
              ],
              sourceMap: false
            }
          },
          {
            loader: require.resolve('stylus-loader'),
            options: {
              import: path.resolve(paths.appSrc, 'styles/imports.styl')
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, require.resolve('css-loader')]
      }
    ]
  },
  resolve: {
    alias: {
      public: paths.appPublic,
      src: paths.appSrc,
      icons: path.resolve(paths.appPublic, 'assets/svg'),
      api: path.resolve(paths.appSrc, 'api'),
      pages: path.resolve(paths.appSrc, 'pages'),
      components: path.resolve(paths.appSrc, 'components'),
      ducks: path.resolve(paths.appSrc, 'ducks'),
      elements: path.resolve(paths.appSrc, 'elements'),
      styles: path.resolve(paths.appSrc, 'styles'),
      utils: path.resolve(paths.appSrc, 'utils'),
      constants: path.resolve(paths.appSrc, 'constants'),
      formatters: path.resolve(paths.appSrc, 'formatters'),
      props: path.resolve(paths.appSrc, 'props')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    // Makes some environment variables available in index.html.
    // Application version is available as %__VERSION__%
    // Deployed commit hash is available as %__COMMIT_HASH__%
    new InterpolateHtmlPlugin(env.raw),
    new MiniCssExtractPlugin({
      filename: 'bundle.[hash:8].css',
      path: paths.appBuild,
      publicPath
    })
  ],
  performance: false,
  target: process.env.TARGET || 'web'
};
