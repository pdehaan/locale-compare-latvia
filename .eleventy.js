module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("postsDescending", function (collection) {
    const posts = collection
      .getFilteredByGlob("src/posts/*.md")
      .sort(function (a, b) {
        return a.data?.title.localeCompare(b.data?.title, "lv-LV", {
          caseFirst: false,
          sensitivity: "variant",
          ignorePunctuation: true,
          usage: "sort",
        });
      });
    return posts;
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
