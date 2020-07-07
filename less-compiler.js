const less = require('less');
const LessPluginCleanCSS = require('less-plugin-clean-css');
const fs = require('fs');

const defaultThemeVars = `@import './src/assets/styles/theme-default.less';`;

// 黑暗主题
// const darkThemeStyles = './src/assets/styles/theme-dark.less';
// const darkThemeVars = `@import '${darkThemeStyles}';`;
const darkThemeVars = require('ng-zorro-antd/dark-theme');

// 紧缩主题
const compactThemeVars = require('ng-zorro-antd/compact-theme');

// const appStyles = './src/assets/styles/theme-default.less'; // 应用的样式入口文件,默认主题
// const themeContent = `@import '${appStyles}';`;

less.render(defaultThemeVars, {
  javascriptEnabled: true,
  plugins: [new LessPluginCleanCSS({ advanced: true })],
  modifyVars: {
    ...defaultThemeVars
  }
}).then(data => {
  fs.writeFileSync(
    // output path for the theme style
    './src/assets/themes/default.css',
    data.css
  )
}).catch(e => {
  // log the render error
  console.error(e);
});

// 官方紧缩主题
less.render(defaultThemeVars, {
  javascriptEnabled: true,
  plugins: [new LessPluginCleanCSS({ advanced: true })],
  modifyVars: {
    ...compactThemeVars,
    ...{
      // for the compact theme
      // you need to add your color variables here
      // you can find the full variables list here
      // https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/theme.less
      'primary-color': '#4b4b4b',
      'error-color': 'green'
    }
  }
}).then(data => {
  fs.writeFileSync(
    // output path for the theme style
    './src/assets/themes/compact.css',
    data.css
  )
}).catch(e => {
  // log the render error
  console.error(e);
});

// 官方黑暗、紧缩主题组合
less.render(defaultThemeVars, {
  javascriptEnabled: true,
  plugins: [new LessPluginCleanCSS({ advanced: true })],
  modifyVars: {
    ...darkThemeVars,
    ...compactThemeVars,
    ...{
      // for the dark theme
      // you need to add your color variables here
      // you can find the full variables list here
      // https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/scripts/site/_site/doc/theme.less
      'primary-color': '#02cadb',
      'error-color': 'red'
    }
  }
}).then(data => {
  fs.writeFileSync(
    // output path for the theme style
    './src/assets/themes/dark.css',
    data.css
  )
}).catch(e => {
  // log the render error
  console.error(e);
});
