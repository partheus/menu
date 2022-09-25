module.exports = function (eleventyConfig) {
  
    eleventyConfig.addPassthroughCopy("./style.css");
    eleventyConfig.addPassthroughCopy("./img");
  
    eleventyConfig.addPassthroughCopy("CNAME");
  
    return {
      passthroughFileCopy: true,
    };
  }