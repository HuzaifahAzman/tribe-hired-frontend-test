import React, { useState, useEffect } from 'react';
import axios from "axios";
import Container from '@mui/material/Container';
import PostList from '../components/PostList';

function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  
  return (
    <>
      <Container maxWidth="sm">
        <h1>Home</h1>
        {posts.length > 0 ? 
          <PostList posts={posts} />
          : "Loading..."
        }
      </Container>
    </>
  )
}

export default Home;