const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("projects/*.md");
  });

  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./img");

  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    passthroughFileCopy: true,
  };
}
