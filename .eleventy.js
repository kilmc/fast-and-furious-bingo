module.exports = function (eleventyConfig) {
  // Input directory: src
  // Output directory: _site

  // The following copies to `_site/img`
  eleventyConfig.addPassthroughCopy({ "src/_assets": "assets" });

  return {
    dir: {
      input: "src",
    },
  };
};
