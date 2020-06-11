const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            title
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
    }
  `)

  const project = result.data.allSanityProject.edges.map(({ node }) => node)
  project.forEach(project => {
    actions.createPage({
      path: project.slug.current,
      component: path.resolve("src/templates/project.js"),
      context: {
        slug: project.slug.current,
        cat: project.categories[0].title,
      },
    })
  })
}
