const sitemap = require('nextjs-sitemap-generator')

sitemap({  
  baseUrl: 'http://presline.co/',  
  pagesDirectory: __dirname + "\\out",  
  targetDirectory : __dirname,
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
        'png',
        'jpg',
        'webp'
  ],
  sitemapStylesheet: [
    {
      type: "text/css",
      styleFile: "./static/bootstrap.min.css"
    },
  ]
})