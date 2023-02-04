const CleanCSS = require("clean-css");


module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("projects", function (collection) {
    return collection.getFilteredByGlob("projects/*.md");
  });

  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./img");

  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addFilter("cssmin", function(code) {
      return new CleanCSS({}).minify(code).styles;
    });

  return {
    passthroughFileCopy: true,
  };
}