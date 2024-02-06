/**
 * Central SVGO configuration file
 */
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Removing the viewBox breaks scaling of SVGs
          // Only required to keep viewBox intact
          // https://github.com/svg/svgo/issues/1128#issuecomment-1367070568
          removeViewBox: false
        }
      }
    },

    // Enforce uniform scaling for all SVGs
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio?retiredLocale=de#syntax
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            preserveAspectRatio: "xMinYMin"
          }
        ]
      }
    },

    {
      name: "removeDimensions"
    }
  ]
}
