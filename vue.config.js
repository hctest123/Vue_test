const { defineConfig } = require('@vue/cli-service')
const path = require("path");
//less文件的路径
const myTheme = path.resolve(__dirname, "./src/assets/less/vantChange.less");
console.log(myTheme)
module.exports = defineConfig({
    transpileDependencies: true,
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import "${myTheme}";`
                }
            },
        }
    },
  }
)

