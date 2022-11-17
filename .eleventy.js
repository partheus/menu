module.exports = function (eleventyConfig) {
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