# gatsby-plugin-remark-footnotes

[remark-footnotes] plugin for [gatsby-transformer-remark].

[remark]@13 has removed the `footnotes` option in favor of [remark-footnotes]
and gatsby-transformer-remark@4 now uses remark@13. This plugin is intended
to keep using the footnotes feature with gatsby-transformer-remark@4.

[remark]: https://github.com/remarkjs/remark
[remark-footnotes]: https://github.com/remarkjs/remark-footnotes
[gatsby-transformer-remark]: https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/

## Install

```
npm install gatsby-plugin-remark-footnotes
```

## How to use

In your `gatsby-config.js`:

```diff
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
+          `gatsby-plugin-remark-footnotes`,
         ]
       }
     }
```

## License

MIT
