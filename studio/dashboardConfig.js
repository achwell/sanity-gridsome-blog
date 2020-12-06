export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fccae14f47f9647f2ba0d8e',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-f6o8djb8',
                  apiId: '12072e4b-ee0b-4732-8c8b-ae5c696b6a29'
                },
                {
                  buildHookId: '5fccae15505f01f033805342',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-kgxz5t2n',
                  apiId: 'fdd320a1-e010-4a02-b06d-1ebd74a0528d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/achwell/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-kgxz5t2n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
