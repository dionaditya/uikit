module.exports = {
  base: '/uikit/',
  title: "Refactory UI Kit",
  description: "An modular vue component that mainly used on https://refactory.id",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/'},
      { text: 'Usage', link: '/usage/'},
      { text: 'Documentation', link: '/docs/'},
    ],
    displayAllHeaders: true,
    sidebar: [
      '/',
      '/usage/',
      {
        title: 'Documentation',
        collapsable: false,
        children: [
          '/docs/',
          '/docs/button'
        ]
      }
    ]
  }
}
