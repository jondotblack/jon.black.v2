import { Client } from '@notionhq/client';

const notionToken = process.env.NOTION_ACCESS_TOKEN;
const blogDatabase = process.env.NOTION_BLOG_DATABASE_ID || '';
const mixtapeDatabase = process.env.NOTION_MIXTAPE_DATABASE_ID || '';

const notion = new Client({
  auth: notionToken,
});

/**
 *
 * @returns utility to fetch any notion database entries
 */

export const getDatabase = async (database_id: string, rest?: any) => {
  const response = await notion.databases.query({
    database_id,
    ...rest,
  });

  return response.results;
};

/**
 *
 * @param pageId
 * @returns single notion page (raw)
 */

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });

  return response;
};

/**
 *
 * @returns list of Blog entries
 */

export const getBlogList = async () => {
  // only retrieve posts that are published
  const filters = {
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
  };

  return getDatabase(blogDatabase, filters);
};

/**
 *
 * @returns list of all Mixtape volumes
 */

export const getMixtapeVolumes = async () => {
  // only retrieve volumes that are published
  const filters = {
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Name',
        direction: 'descending',
      },
    ],
  };

  return getDatabase(mixtapeDatabase, filters);
};

/**
 *
 * @returns recent Mixtape volume
 */

export const getRecentMixtapeVolumes = async () => {
  // only retrieve volumes that are published
  const filters = {
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    page_size: 1,
    sorts: [
      {
        property: 'Name',
        direction: 'descending',
      },
    ],
  };

  return getDatabase(mixtapeDatabase, filters);
};

/**
 *
 * @returns recent blog entry
 */

export const getRecentBlogList = async () => {
  // only retrieve posts that are published
  const filters = {
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    page_size: 1,
    sorts: [
      {
        property: 'Publish date',
        direction: 'descending',
      },
    ],
  };

  return getDatabase(blogDatabase, filters);
};
