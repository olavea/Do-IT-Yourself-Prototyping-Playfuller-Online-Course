module.exports = {
  plugins: [
    {
      resolve: `@olavea/gatsby-theme-picture-book`,
      options: {
        basePath: `/`,
        imagePath: `book/images`,
        infoLink: {
          title: "Do-IT-Yourself-Prototypin",
          url: `https://olavea.com`,
        },
      },
    },
  ],
}
