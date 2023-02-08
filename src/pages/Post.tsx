import React, { useState, useEffect } from 'react';
import axios from "axios";
import Container from '@mui/material/Container';
import PostList from '../components/PostList';
import { useSearchParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState<any>(null);
  let [searchParams, ] = useSearchParams();
  let postId = searchParams.get("postId") ?? 0;

  useEffect(() => {
    if (postId > 0){
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [postId])

  return (
    <>
      <Container maxWidth="sm">
        <h1>{`Post ${postId}`}</h1>
        {post ?
          <PostList posts={[post]}/>
          : "Loading..."
        }
      </Container>
    </>
  )
}
export default Post;