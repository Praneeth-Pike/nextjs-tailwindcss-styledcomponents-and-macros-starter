// // require("dotenv").config({
// //     path: `.env.${process.env.NODE_ENV}`,
// // })

// // const {
// //   PHASE_DEVELOPMENT_SERVER,
// //   PHASE_PRODUCTION_BUILD,
// // } = require('next/constants')

// node: {
//   fs: "empty"
// };

// // const { parsed: localEnv } = require('dotenv').config()

// const withCSS = require('@zeit/next-css')
// // const webpack = require('webpack')
const withImages = require("next-images")
const withFonts = require("next-fonts")
module.exports = withImages()
// module.exports = {
// 	images: {
// 		domains: ["events-now-images.s3.amazonaws.com"],
// 	},
// }
module.exports = phase => withImages(withFonts({
    images: {
		domains: ["events-now-images.s3.amazonaws.com", "img-prod-cms-rt-microsoft-com.akamaized.net"],
	},
}))

// // module.exports = phase => withCSS(withImages(withFonts({
// //   webpack(config) {
// //     config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
// //     // const configEntry = config.entry;
// //     // console.log(configEntry);
// //     // config.entry = function(){
// //     //     return configEntry()
// //     //     .then(entry => {
// //     //         console.log(entry)
// //     //     })
// //     // }
// //     // config.entry = './pages/auth/login.js',
// //     // This is important to run tw macros in CSS-in-JS.
// //     config.node = { fs: 'empty' }
// //     // console.log(config);
// //     return config
// //   },
// //   env: (() => {
// //     // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
// //     const isDev = phase === PHASE_DEVELOPMENT_SERVER
// //     // when `next build` or `npm run build` is used
// //     const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.NOW_GITHUB_COMMIT_REF === 'master'
// //     // when `next build` or `npm run build` is used
// //     const isStaging = PHASE_PRODUCTION_BUILD && process.env.NOW_GITHUB_COMMIT_REF !== 'master'

// //     console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
// //     const variables = {
// //       BRANCH: process.env.NOW_GITHUB_COMMIT_REF,
// //       COMMIT: process.env.NOW_GITHUB_COMMIT_SHA,
// //       USERNAME: process.env.NOW_GITHUB_COMMIT_AUTHOR_LOGIN
// //     }
// //     // if(process.env.LOCAL_URl) return { BASE_API_URL: 'http://10.10.0.10:3323', ...variables }
// //     // if (isDev) return { BASE_API_URL: 'https://api.owifi.in', ...variables }
// //     // if (isProd) return { BASE_API_URL: 'https://api.wesimply5.com', ...variables }
// //     // if (isStaging) return { BASE_API_URL: 'https://api.owifi.in', ...variables }

// //     // return 'BASE_API_URL:not (isDev,isProd && !isStaging,isProd && isStaging)'

// //   })()
// // })));
