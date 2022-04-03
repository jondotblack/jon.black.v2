import { NotionAPI } from 'notion-client';
import { getPageTitle } from 'notion-utils';

const api = new NotionAPI();
const handbookPage = process.env.NOTION_HANDBOOK_PAGE_ID || '';

/**
 *
 * @param pageId
 * @returns single notion page that can be used with <NotionRenderer />
 */

export const getBlogPost = async (pageId: string | undefined) => {
  if (!pageId) {
    return null;
  }

  const response = await api.getPage(pageId);
  const title = getPageTitle(response);

  // TODO: pick blacklisted block types

  return {
    title: title,
    content: response,
  };
};

/**
 *
 * @param pageId
 * @returns single notion page that can be used with <NotionRenderer />
 */

export const getHandbook = async () => {
  const response = await api.getPage(handbookPage);
  const title = getPageTitle(response);

  // TODO: pick blacklisted block types

  return {
    title: title,
    content: response,
  };
};
