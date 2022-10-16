// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { client } from '../../lib/client';

export const posts = async (req, res) => {
  const { start, end } = req.query;

  if (isNaN(Number(start)) || isNaN(Number(end))) res.status(400).json({ error: 'Data invalid' });

  const { posts, total } = await loadPosts(start, end);
  
  res.status(200).json({ posts, total });
};

export const loadPosts = async (start, end) => {
  const query = `{
    "posts": *[_type == "post"] | order(pablished_date desc) [${start}...${end}] {_id, pablished_date, title, slug, description, image},
    "total": count(*[_type == "post"])
  }`;
  const { posts, total } = await client.fetch(query);
  return { posts, total };
};

export default posts;