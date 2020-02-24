const fs = require('fs');

// 1) make sure data dir exist
exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || 'data';

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

// 2) define event type
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Event implements Node @dontInfer {
      id: ID!
      name: String!
      location: String!
      startDate: Date! @dateformat @proxy(from: "start_date")
      endDate: Date! @dateformat @proxy(from: "end_date")
      url: String!
      slug: String!
    }
  `);
};

// 3) define resolvers for custom fields
exports.createResolvers = ({ createResolvers }, options) => {
  const basePath = options.basePath || '/';

  const slugify = str => {
    const slug = str
      .toLocaleString()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    return `/${basePath}/${slug}/`.replace(/\/\/+/g, '/');
  };

  createResolvers({
    Event: {
      slug: {
        resolve: source => slugify(source.name),
      },
    },
  });
};

// 4) query events and create pages
exports.createPages = async ({ actions, reporter, graphql }, options) => {
  const basePath = options.basePath || '/';
  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/Events.js'),
  });

  const result = await graphql(`
  query AllEvents {
    allEvent(sort: {fields: startDate, order: ASC}) {
      nodes {
        id
        slug
      }
    }
  }
  `);

  if (result.errors) {
    reporter.panic('Error loading AllEvents query', reporter.error);
    return;
  }

  const events = result.data.allEvent.nodes;

  events.forEach(event => {
    const slug = event.slug;

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/Event.js'),
      context: {
        eventID: event.id,
      },
    });
  });
};

