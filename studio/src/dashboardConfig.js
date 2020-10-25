export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9536b9f6aab799a80c6f39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-htgnme68',
                  apiId: '5bbb3155-e677-43ac-aaee-e614de1b8a01'
                },
                {
                  buildHookId: '5f9536b9b259c87961057fa1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j5q2fc7v',
                  apiId: '844ce275-cbe1-4abe-9cf4-8b80a5046a97'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/super-marios/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j5q2fc7v.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
