// const { environment } = require('@rails/webpacker')
// const path = require('path')
// const { VueLoaderPlugin } = require('vue-loader')

// // const customConfig = {
// //   resolve:{
// //     alias: {
// //      '@': path.resolve(__dirname, '..', '..', 'app/javascript/src')
// //     //  '@': path.resolve(__dirname, 'rails_vue3_app\app\javascript\src')
// //     }
// //   }
// // }

// // environment.config.merge(customConfig)

// environment.plugins.prepend(
//     'VueLoaderPlugin',
//     new VueLoaderPlugin()
// )

// environment.loaders.prepend('vue', {
//     test: /\.vue$/,
//     use: [{
//         loader: 'vue-loader'
//     }]
// })

// module.exports = environment


const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.config.delete('node.dgram')
environment.config.delete('node.fs')
environment.config.delete('node.net')
environment.config.delete('node.tls')
environment.config.delete('node.child_process')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment