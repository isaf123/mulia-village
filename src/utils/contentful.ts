import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: "1b2o5m2rkfzh",
    accessToken: "XX2j1jp0a0ImEuGH5WmlCzUeqSlOuEjY99ELzmB6NhM",
  });
};
const client = createContentClient();

export const getEntriesByType = async (type: any) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getBlogPosts = async () => {
  const results = await getEntriesByType("promo");
  const blogPost = results.map((blog) => blog.fields);
  return blogPost;
};
