import React, { useState } from 'react';
import Head from 'next/head';

import { 
  BuyMeCoffee, 
  Cover, 
  Post, 
  PostGrid, 
  Section, 
  SocialNetworks, 
  Title,
  Button,
} from '../components';

import { loadPosts } from './api/posts';

const LOAD_MORE_STEP = 4;

export const Home = ({ initialPosts, total }) => {
  const [ posts, setPosts ] = useState(initialPosts);
  const [ loadedAmount, setLoadedAmount ] = useState(LOAD_MORE_STEP);
  const [ loading, setLoading ] = useState(false);

  const isLoadingButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);
    try {
      const data = await fetch(`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`)
        .then(res => res.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([ ...posts, ...data.posts ])
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Web Blog Next React Application</title>
      </Head>
      <Section>
        <Cover title="Victor<br />Smirnov" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
        <PostGrid>
          { posts.map(post => <Post
          key={ post.slug.current }
          { ...post }
          />) }
        </PostGrid>
        { isLoadingButton && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button 
              onClick={ getMorePosts }
              disabled={ loading }
            >Load more posts...</Button>
          </div>
        ) }
      </Section>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);
  return { props: { initialPosts: posts, total } }
};

export default Home;
