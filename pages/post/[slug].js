import { format } from 'date-fns';
import Head from 'next/head';

import { client } from '../../lib/client';
import { Article, Content, Title } from "../../components";
import styles from './style.module.scss';

const Post = ({ post }) => {
  const date = format(new Date(post.pablished_date), 'dd MMM yyyy')
  return (
    <Article backUrl="/" className={ styles.post }>
      <Head>
        <title>{ post.meta_title }</title>
      </Head>
      <Title className={ styles.postTitle }>{ post.title }</Title>
      <p className={ styles.postDate }>{ date }</p>
      <Content body={ post.body }/>
    </Article>
  );
};

export const getStaticPaths = async () => {
  const query = `*[type == "post"] { slug { current } }`;
  const posts = await client.fetch(query);
  const paths = posts.map(post => { params: { slug: post.slug.current } });

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({params: { slug }}) => {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;
  const post = await client.fetch(query);

  return { props: { post } }
};

export default Post;